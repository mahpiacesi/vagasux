/**
 * Baixa ilustrações do Storyset (API stories.freepiklabs.com) e recolore para a marca VagasUX.
 * Estilo preferido: Cuate (fallback: Pana).
 *
 * Uso: node scripts/fetch-storyset-illustrations.mjs
 *
 * Licença Storyset: atribuição recomendada — https://storyset.com/
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "assets", "storyset");

const BRAND_PRIMARY = "#5D6BF6"; // Brand-300 (fundos claros)
const BRAND_YELLOW = "#F6D16E"; // Complementary-300 (fundos azuis)
/** Slides com fundo azul usam destaque amarelo na ilustração */
const ON_BLUE_SLIDES = new Set(["01", "08"]);
const STYLE_PRIMARY = "cuate";
const STYLE_FALLBACK = "pana";

/** slug do Storyset → arquivo do carrossel (tentar Cuate, depois Pana) */
const SLUG_MAP = [
  { file: "01.svg", slug: "ui-ux-team", fallback: "teamwork-high-five" },
  { file: "02.svg", slug: "group-discussion", fallback: "group" },
  { file: "03.svg", slug: "team-lineup", fallback: "team" },
  { file: "04.svg", slug: "online-page", fallback: "online-tech-talks" },
  { file: "05.svg", slug: "forming-team-leadership", fallback: "team" },
  { file: "06.svg", slug: "sharing-ideas", fallback: "collaboration" },
  { file: "07.svg", slug: "team-checklist", fallback: "group-therapy" },
  { file: "08.svg", slug: "social-update", fallback: "social-media" }
];

const DEFAULT_COLOR_BY_STYLE = {
  cuate: /#FFC727/gi,
  pana: /#FF725E/gi,
  rafiki: /#407BFF/gi
};

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/json",
  Referer: "https://storyset.com/"
};

async function fetchAllVectors(style) {
  const first = await fetch(
    `https://stories.freepiklabs.com/api/vectors?style=${style}&page=1&order=recent&app=true`,
    { headers }
  );
  if (!first.ok) throw new Error(`API ${style} ${first.status}`);
  const firstJson = await first.json();
  const lastPage = Number(firstJson?.meta?.last_page || 1);
  const all = [...(firstJson?.data || [])];

  for (let page = 2; page <= Math.min(lastPage, 60); page++) {
    const res = await fetch(
      `https://stories.freepiklabs.com/api/vectors?style=${style}&page=${page}&order=recent&app=true`,
      { headers }
    );
    if (!res.ok) continue;
    const json = await res.json();
    all.push(...(json?.data || []));
    process.stdout.write(`[${style}] page ${page}/${lastPage}\n`);
  }
  return all;
}

function findBySlug(vectors, slug, fallback) {
  return (
    vectors.find((v) => v?.illustration?.slug === slug) ||
    (fallback ? vectors.find((v) => v?.illustration?.slug === fallback) : null)
  );
}

function resolveIllustration(cuateVectors, panaVectors, slug, fallback) {
  const fromCuate = findBySlug(cuateVectors, slug, fallback);
  if (fromCuate?.src) return { item: fromCuate, style: STYLE_PRIMARY };

  const fromPana = findBySlug(panaVectors, slug, fallback);
  if (fromPana?.src) return { item: fromPana, style: STYLE_FALLBACK };

  return null;
}

function recolorSvg(svg, style, color) {
  const pattern = DEFAULT_COLOR_BY_STYLE[style] || DEFAULT_COLOR_BY_STYLE.cuate;
  return svg.replace(pattern, color);
}

async function downloadSvg(src) {
  const res = await fetch(src, { headers });
  if (!res.ok) throw new Error(`SVG ${res.status}`);
  return await res.text();
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });

  console.log(`Buscando vetores Storyset (${STYLE_PRIMARY}, fallback ${STYLE_FALLBACK})...`);
  const cuateVectors = await fetchAllVectors(STYLE_PRIMARY);
  console.log(`Total ${STYLE_PRIMARY}: ${cuateVectors.length}`);

  const panaVectors = await fetchAllVectors(STYLE_FALLBACK);
  console.log(`Total ${STYLE_FALLBACK}: ${panaVectors.length}`);

  const missing = [];

  for (const { file, slug, fallback } of SLUG_MAP) {
    const resolved = resolveIllustration(cuateVectors, panaVectors, slug, fallback);
    if (!resolved) {
      missing.push(slug);
      console.warn(`⚠ não encontrado (cuate/pana): ${slug}`);
      continue;
    }

    const { item, style } = resolved;
    const rawSvg = await downloadSvg(item.src);
    const id = file.replace(".svg", "");
    const usedSlug = item?.illustration?.slug || slug;

    const brandSvg = recolorSvg(rawSvg, style, BRAND_PRIMARY);
    await fs.writeFile(path.join(OUT, file), brandSvg, "utf8");
    console.log(`✓ ${file} ← ${usedSlug} (${style}, brand)`);

    if (ON_BLUE_SLIDES.has(id)) {
      const yellowSvg = recolorSvg(rawSvg, style, BRAND_YELLOW);
      await fs.writeFile(path.join(OUT, `${id}-on-blue.svg`), yellowSvg, "utf8");
      console.log(`✓ ${id}-on-blue.svg ← ${usedSlug} (${style}, yellow)`);
    }
  }

  if (missing.length) {
    console.log("\nSlugs alternativos em Cuate (amostra):");
    const samples = cuateVectors
      .map((v) => v?.illustration?.slug)
      .filter(Boolean)
      .filter((s) =>
        /team|community|learn|work|job|career|social|join|share|group|online|ux|design/i.test(s)
      )
      .slice(0, 30);
    console.log([...new Set(samples)].join("\n"));
  }

  console.log(`\nSalvo em: ${OUT}`);
  console.log("Atribuição: illustrations by Storyset (https://storyset.com/)");
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
