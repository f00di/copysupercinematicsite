import { readdir } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import sharp from "sharp";

const mediaDirectory = join(process.cwd(), "public", "media");
const files = (await readdir(mediaDirectory)).filter((file) => file.endsWith(".png"));

await Promise.all(
  files.map(async (file) => {
    const input = join(mediaDirectory, file);
    const output = join(mediaDirectory, `${basename(file, extname(file))}.webp`);
    await sharp(input)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 84, effort: 5, smartSubsample: true })
      .toFile(output);
    process.stdout.write(`Optimized ${file}\n`);
  }),
);
