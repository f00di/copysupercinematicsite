// Prefixes files in public/ with the GitHub Pages base path.
// next/image does not add basePath to string src values on its own.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export function asset(path: string) {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
