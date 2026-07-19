import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import ts from "typescript";

const sourcePath = path.resolve("supabase/functions/audit-request-submit/index.ts");
const source = fs.readFileSync(sourcePath, "utf8");
const diagnostics =
  ts
    .transpileModule(source, {
      compilerOptions: {
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.ESNext,
      },
      reportDiagnostics: true,
    })
    .diagnostics?.filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error) ?? [];

const nonAscii = [...source]
  .map((character, index) => ({ character, index, codePoint: character.codePointAt(0) ?? 0 }))
  .filter(({ codePoint }) => codePoint > 0x7f);

if (diagnostics.length > 0 || nonAscii.length > 0) {
  for (const diagnostic of diagnostics) {
    console.error(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
  }
  for (const { index, codePoint } of nonAscii) {
    console.error(`Non-ASCII code point U+${codePoint.toString(16).toUpperCase()} at character ${index}`);
  }
  process.exit(1);
}

const normalizeOriginSource = source.match(
  /function normalizeOrigin\(value: string\): string \{[\s\S]*?\n\}/,
)?.[0];
if (!normalizeOriginSource) {
  console.error("normalizeOrigin() could not be found in the Edge Function source");
  process.exit(1);
}

const runnableNormalizeOrigin = normalizeOriginSource.replace(
  "function normalizeOrigin(value: string): string",
  "function normalizeOrigin(value)",
);
const normalizeOrigin = Function(`${runnableNormalizeOrigin}; return normalizeOrigin;`)();

assert.equal(normalizeOrigin("https://studio.v1be.io"), "https://studio.v1be.io");
assert.equal(normalizeOrigin("https://studio.v1be.io/"), "https://studio.v1be.io");
assert.equal(normalizeOrigin('"https://studio.v1be.io/"'), "https://studio.v1be.io");
assert.equal(
  normalizeOrigin("AUDIT_ALLOWED_ORIGINS=https://studio.v1be.io/"),
  "https://studio.v1be.io",
);

const normalizeWebsiteSource = source.match(
  /function normalizeWebsiteInput\(value: string\): string \{[\s\S]*?\n\}/,
)?.[0];
if (!normalizeWebsiteSource) {
  console.error("normalizeWebsiteInput() could not be found in the Edge Function source");
  process.exit(1);
}

const runnableNormalizeWebsite = normalizeWebsiteSource.replace(
  "function normalizeWebsiteInput(value: string): string",
  "function normalizeWebsiteInput(value)",
).replace("(label: string)", "(label)");
const normalizeWebsiteInput = Function(
  `${runnableNormalizeWebsite}; return normalizeWebsiteInput;`,
)();

assert.equal(normalizeWebsiteInput("v1be.io"), "https://v1be.io/");
assert.equal(normalizeWebsiteInput("www.v1be.io"), "https://www.v1be.io/");
assert.equal(normalizeWebsiteInput("v1be.io/services"), "https://v1be.io/services");
assert.equal(normalizeWebsiteInput("https://v1be.io"), "https://v1be.io/");
assert.equal(normalizeWebsiteInput("v1be"), "");
assert.equal(normalizeWebsiteInput("localhost"), "");
assert.equal(normalizeWebsiteInput("brand.c"), "");

console.log("[edge-function] source parses, is ASCII-safe, and normalizes origins and domains");
