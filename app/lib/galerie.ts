import { readdir } from "node:fs/promises";
import path from "node:path";

const IMAGE_RE = /\.(jpe?g|png|webp|avif|gif)$/i;

/**
 * Lit automatiquement toutes les images présentes dans /public/galerie.
 * Il suffit de déposer des fichiers (.jpg, .png, .webp…) dans ce dossier :
 * ils apparaissent dans la galerie sans toucher au code.
 */
export async function getGalerieImages(): Promise<string[]> {
  const dir = path.join(process.cwd(), "public", "galerie");
  try {
    const entries = await readdir(dir);
    return entries
      .filter((name) => IMAGE_RE.test(name) && !name.startsWith("."))
      .sort((a, b) => a.localeCompare(b, "fr", { numeric: true }))
      .map((name) => `/galerie/${name}`);
  } catch {
    // Dossier absent ou illisible : galerie simplement vide.
    return [];
  }
}
