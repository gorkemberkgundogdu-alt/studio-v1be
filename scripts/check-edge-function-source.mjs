import fs from "node:fs";
import path from "node:path";
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

console.log("[edge-function] source parses and is ASCII-safe");
