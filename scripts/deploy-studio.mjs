/**
 * v1be studio — cPanel deploy: build + zip.
 *
 * Çıktı: dist-deploy/v1be-studio.zip
 * Zip'in İÇİ dist içeriğidir (index.html kökte) — cPanel File Manager'da
 * studio.v1be.io docroot'una extract edince dosyalar doğru yere düşer.
 *
 * Kullanım:
 *   node scripts/deploy-studio.mjs
 *   npm run deploy
 *
 * ÖNEMLİ: PUBLIC_FORM_ENDPOINT build anında bundle'a gömülür.
 * Formspree vb. kullanıyorsan build öncesi .env'de PROD değerinin
 * olduğundan emin ol. Boş bırakılırsa form mailto: fallback'e düşer.
 */
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "dist-deploy");
const DIST = join(ROOT, "dist");
const ZIP = join(OUT, "v1be-studio.zip");

function run(cmd, opts = {}) {
  execSync(cmd, { stdio: "inherit", cwd: ROOT, ...opts });
}

function main() {
  console.log("==> v1be studio: deploy hazırlığı");

  if (!existsSync(join(ROOT, "node_modules"))) {
    console.log("==> node_modules yok, npm ci");
    run("npm ci");
  }

  console.log("==> build");
  run("npm run build");

  if (!existsSync(DIST)) {
    console.error("[deploy] dist/ bulunamadı — build başarısız olmuş olabilir.");
    process.exit(1);
  }

  mkdirSync(OUT, { recursive: true });
  rmSync(ZIP, { force: true });

  console.log("==> zip");
  // dist içeriğini kökten zip'le (.DS_Store hariç)
  run(`zip -r -q -X "${ZIP}" . -x "*.DS_Store" "__MACOSX/*"`, { cwd: DIST });

  console.log("");
  console.log(`==> hazır -> dist-deploy/v1be-studio.zip`);
  console.log("");
  console.log("Yükleme:");
  console.log("  v1be-studio.zip -> studio.v1be.io docroot (subdomain)");
  console.log("cPanel File Manager: zip'i yükle, sağ tık -> Extract, sonra zip'i sil.");
}

main();
