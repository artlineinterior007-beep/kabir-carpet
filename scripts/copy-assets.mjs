import fs from "fs";
import path from "path";

const rootDir = path.resolve(import.meta.dirname, "..");
const sourceDir = path.resolve(rootDir, "attached_assets");
const targetDir = path.resolve(rootDir, "client", "public", "assets");

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursiveSync(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursiveSync(sourceDir, targetDir);
console.log(`[copy-assets] Copied assets from ${sourceDir} to ${targetDir}`);
