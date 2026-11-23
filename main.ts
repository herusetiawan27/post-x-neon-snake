// Menyalin POST.json hasil agen ke folder output make.fun.
// Dibaca dari direktori bot, ditulis ke direktori output.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function main(): void {
  const sourceDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const fileName = "POST.json";

  try {
    mkdirSync(targetDir, { recursive: true });
    const from = join(sourceDir, fileName);
    const to = join(targetDir, fileName);
    copyFileSync(from, to);
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error(`Tidak bisa menyalin ${fileName}: ${detail}`);
    process.exit(1);
  }
}

main();
