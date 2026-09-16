import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const base = "https://amanda-masi-architecture.amandau-masi.chatgpt.site";
const files = [
  "Amanda_Masi_Portfolio.pdf",
  "favicon.svg",
  "portfolio/casa-model-vivid.jpg",
  "portfolio/casa-rear-courtyard.jpg",
  "portfolio/contact.jpg",
  "portfolio/cube-brainstorm.jpg",
  "portfolio/cube-interior-vivid.jpg",
  "portfolio/cube-landscape-vivid.jpg",
  "portfolio/cube-presentation.jpg",
  "portfolio/cube-stair-detail.jpg",
  "portfolio/img-000-dark.jpg",
  "portfolio/img-000.jpg",
  "portfolio/img-001.jpg",
  "portfolio/img-002.jpg",
  "portfolio/img-003.jpg",
  "portfolio/img-004.jpg",
  "portfolio/img-005.jpg",
  "portfolio/img-006.jpg",
  "portfolio/img-007.jpg",
  "portfolio/img-008.jpg",
  "portfolio/img-009.jpg",
  "portfolio/img-010.jpg",
  "portfolio/img-011.jpg",
  "portfolio/img-012.jpg",
  "portfolio/img-013.jpg",
  "portfolio/img-014.jpg",
  "portfolio/img-015.jpg",
  "portfolio/img-016.jpg",
  "portfolio/img-017.jpg",
  "portfolio/img-018.jpg",
  "portfolio/img-019.jpg",
  "portfolio/img-020.jpg",
  "portfolio/img-021.jpg",
  "portfolio/level-01-enhanced-v4.jpg",
  "portfolio/level-01-natural-v5.jpg",
  "portfolio/oblique-room-middle-detail.jpg",
  "portfolio/oblique-room-top-detail.jpg",
  "portfolio/poster-cropped.jpg",
  "portfolio/vida-brands.jpg",
  "portfolio/vida-cart.jpg",
  "portfolio/vida-display.jpg",
  "portfolio/vida-drawers.jpg",
  "portfolio/vida-reduction.jpg",
  "portfolio/vida-wallcoverings.jpg",
  "portfolio/vida-wayfinding.jpg",
  "portfolio/window-bag-detail.jpg",
  "portfolio/window-bag-heater-close-v2.jpg",
  "portfolio/window-bag-heater-detail.jpg",
  "portfolio/window-leaves-close-v2.jpg",
  "portfolio/window-leaves-detail.jpg"
];

for (const file of files) {
  const response = await fetch(`${base}/${file}`);
  if (!response.ok) throw new Error(`Unable to download ${file}: ${response.status}`);
  const target = new URL(`../public/${file}`, import.meta.url);
  await mkdir(dirname(target.pathname), { recursive: true });
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${file}`);
}
