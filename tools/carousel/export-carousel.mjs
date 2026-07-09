import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawn } from "node:child_process";
import { PDFDocument } from "pdf-lib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.join(__dirname, "out");
const ASSETS_DIR = path.join(__dirname, "assets");
const STORYSET_DIR = path.join(ASSETS_DIR, "storyset");

const TOKENS = {
  brand100: "#EFF0FF",
  brand200: "#A8B0FF",
  brand300: "#5D6BF6",
  brand400: "#3D4AC3",
  brand500: "#242E90",
  neutral100: "#FFFFFF",
  neutral200: "#D9D7E0",
  neutral400: "#6F6A94",
  neutral500: "#07003A",
  comp100: "#FFFBF1",
  comp200: "#FFEAB1",
  comp300: "#F6D16E"
};

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function svgIcon(name, color) {
  const stroke = escapeHtml(color);
  // Slightly bolder stroke to read well on mobile.
  const common = `fill="none" stroke="${stroke}" stroke-width="4.75" stroke-linecap="round" stroke-linejoin="round"`;

  switch (name) {
    case "umbrella":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M12 44c10-18 25-27 36-27s26 9 36 27" />
          <path ${common} d="M12 44h72" />
          <path ${common} d="M48 17v44" />
          <path ${common} d="M48 61v12c0 9-6 14-13 14-6 0-11-4-11-10" />
        </svg>`;
    case "chatSparkle":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M20 26h56v34H46l-14 10v-10H20z" />
          <path ${common} d="M72 18l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
        </svg>`;
    case "sprout":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M48 78V40" />
          <path ${common} d="M48 46c-10-18-26-16-30-14 4 20 20 28 30 28" />
          <path ${common} d="M48 46c10-18 26-16 30-14-4 20-20 28-30 28" />
          <path ${common} d="M30 78h36" />
        </svg>`;
    case "compass":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <circle ${common} cx="48" cy="48" r="28" />
          <path ${common} d="M42 54l6-22 6 22-6 6z" />
          <path ${common} d="M48 20v6" />
          <path ${common} d="M48 70v6" />
          <path ${common} d="M20 48h6" />
          <path ${common} d="M70 48h6" />
        </svg>`;
    case "arrowRight":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M18 48h50" />
          <path ${common} d="M54 32l16 16-16 16" />
        </svg>`;
    case "briefcase":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M30 28v-6c0-4 3-6 6-6h24c3 0 6 2 6 6v6" />
          <path ${common} d="M18 32h60v40c0 5-4 8-8 8H26c-4 0-8-3-8-8z" />
          <path ${common} d="M18 48h60" />
        </svg>`;
    case "book":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M22 22h40c6 0 12 4 12 10v44c0-6-6-10-12-10H22z" />
          <path ${common} d="M22 22v44c0-6 6-10 12-10h40" />
        </svg>`;
    case "people":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M34 44c6 0 10-4 10-10s-4-10-10-10-10 4-10 10 4 10 10 10z" />
          <path ${common} d="M62 44c6 0 10-4 10-10s-4-10-10-10-10 4-10 10 4 10 10 10z" />
          <path ${common} d="M18 76c2-14 12-20 24-20s22 6 24 20" />
          <path ${common} d="M46 76c2-12 10-18 20-18 8 0 14 3 18 10" />
        </svg>`;
    case "shield":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M48 16l26 10v22c0 18-10 30-26 36-16-6-26-18-26-36V26z" />
          <path ${common} d="M36 50l8 8 16-18" />
        </svg>`;
    case "link":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M38 56l-6 6c-7 7-18 7-25 0s-7-18 0-25l6-6" />
          <path ${common} d="M58 40l6-6c7-7 18-7 25 0s7 18 0 25l-6 6" />
          <path ${common} d="M36 60l24-24" />
        </svg>`;
    case "megaphone":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M18 52V38l44-16v52L18 58z" />
          <path ${common} d="M18 38h-6v14h6" />
          <path ${common} d="M32 58l6 18c1 3 4 5 8 4 4-1 6-4 5-8l-4-12" />
          <path ${common} d="M72 34c8 4 12 10 12 14s-4 10-12 14" />
        </svg>`;
    case "bookmark":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M30 18h36c4 0 6 3 6 6v58L48 66 24 82V24c0-3 2-6 6-6z" />
        </svg>`;
    case "heartChat":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M18 26h44v28H38l-12 10v-10H18z" />
          <path ${common} d="M70 66s-10-6-10-14c0-4 3-7 7-7 2 0 4 1 6 3 2-2 4-3 6-3 4 0 7 3 7 7 0 8-10 14-10 14z" />
        </svg>`;
    case "check":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M24 52l14 14 34-38" />
        </svg>`;
    case "personPlus":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M40 46c8 0 14-6 14-14s-6-14-14-14-14 6-14 14 6 14 14 14z" />
          <path ${common} d="M18 78c3-16 15-24 22-24s19 8 22 24" />
          <path ${common} d="M72 44v20" />
          <path ${common} d="M62 54h20" />
        </svg>`;
    case "heart":
      return `
        <svg viewBox="0 0 96 96" aria-hidden="true">
          <path ${common} d="M48 78S22 62 22 44c0-8 6-14 14-14 5 0 9 2 12 6 3-4 7-6 12-6 8 0 14 6 14 14 0 18-26 34-26 34z" />
        </svg>`;
    default:
      return "";
  }
}

function baseCss() {
  return `
    :root{
      --brand-100:${TOKENS.brand100};
      --brand-200:${TOKENS.brand200};
      --brand-300:${TOKENS.brand300};
      --brand-400:${TOKENS.brand400};
      --brand-500:${TOKENS.brand500};
      --neutral-100:${TOKENS.neutral100};
      --neutral-200:${TOKENS.neutral200};
      --neutral-400:${TOKENS.neutral400};
      --neutral-500:${TOKENS.neutral500};
      --comp-100:${TOKENS.comp100};
      --comp-200:${TOKENS.comp200};
      --comp-300:${TOKENS.comp300};
    }
    *{ box-sizing:border-box; }
    html,body{ margin:0; padding:0; }
    body{
      width:1080px;
      height:1350px;
      font-family: "Lato", system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
      color:var(--neutral-500);
    }
    .slide{ width:1080px; height:1350px; position:relative; overflow:hidden; }
    .grain::before{
      content:"";
      position:absolute; inset:0;
      background-image:
        linear-gradient(0deg, rgba(7,0,58,0.03), rgba(7,0,58,0.03)),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0 2px, rgba(255,255,255,0) 2px 6px),
        repeating-linear-gradient(90deg, rgba(0,0,0,0.02) 0 1px, rgba(0,0,0,0) 1px 7px);
      mix-blend-mode:multiply;
      pointer-events:none;
    }
    .pad{ padding:154px 96px 0; }
    .eyebrow{ font-size:30px; letter-spacing:0.2px; color:var(--brand-500); font-weight:600; }
    .h1{ font-size:112px; line-height:0.95; margin:18px 0 0; font-weight:900; letter-spacing:-1.2px; }
    .h2{ font-size:72px; line-height:1.04; margin:18px 0 0; font-weight:900; letter-spacing:-0.8px; }
    .lead{ font-size:44px; line-height:1.22; margin:26px 0 0; font-weight:500; max-width:820px; }
    .body{
      font-size:44px;
      line-height:1.26;
      margin:26px 0 0;
      font-weight:500;
      max-width:860px;
      white-space:pre-line;
    }
    .footer{
      position:absolute; left:92px; bottom:70px;
      font-size:30px; color:rgba(7,0,58,0.78); font-weight:600;
    }
    .slideCount{
      position:absolute; right:92px; bottom:70px;
      font-size:30px; color:rgba(7,0,58,0.70); font-weight:700;
    }
    .dot{ width:18px; height:18px; background:var(--comp-300); border-radius:999px; display:inline-block; vertical-align:middle; }
    .rule{
      position:absolute; left:92px; top:260px; width:3px; height:860px;
      background:rgba(36,46,144,0.20); border-radius:999px;
    }
    .bullets{
      margin:40px 0 0; padding:0; list-style:none;
      display:flex; flex-direction:column; gap:34px; max-width:860px;
    }
    .bullet{ display:flex; align-items:flex-start; gap:22px; font-size:44px; line-height:1.22; font-weight:600; }
    .icon{ width:62px; height:62px; flex:0 0 auto; margin-top:2px; }
    .icon svg{ width:100%; height:100%; }
    .panel{ position:absolute; right:0; top:180px; width:420px; height:1020px; background:var(--brand-100); z-index:0; }
    .card{
      background:var(--neutral-100);
      border:2px solid var(--neutral-200);
      border-radius:34px;
      padding:54px 54px;
      box-shadow:0 22px 70px rgba(7,0,58,0.10);
    }
    .timeline{ margin-top:40px; display:flex; flex-direction:column; gap:30px; max-width:860px; }
    .step{ display:flex; gap:22px; align-items:flex-start; font-size:44px; line-height:1.22; font-weight:700; }
    .step .n{
      width:56px; height:56px; border-radius:999px;
      background:var(--comp-200);
      border:2px solid rgba(61,74,195,0.55);
      display:flex; align-items:center; justify-content:center;
      font-weight:900; color:var(--neutral-500); flex:0 0 auto; margin-top:4px;
    }
    .note{
      margin-top:36px;
      padding:22px 26px;
      border:2px solid rgba(36,46,144,0.22);
      border-radius:22px;
      background:rgba(239,240,255,0.35);
      font-size:34px;
      line-height:1.22;
      font-weight:600;
      max-width:860px;
    }
    .sidebar{ position:absolute; left:0; top:0; width:36px; height:100%; background:var(--brand-300); }
    .sidebarDot{ position:absolute; left:9px; top:78px; width:18px; height:18px; border-radius:999px; background:var(--comp-300); }
    .watermark{
      position:absolute; right:70px; top:140px;
      width:520px; height:520px; opacity:0.06; transform:rotate(-8deg); pointer-events:none;
    }
    .tag{
      display:inline-flex; align-items:center; justify-content:center;
      padding:18px 26px; background:var(--comp-300); border-radius:18px;
      font-weight:900; font-size:32px; color:var(--neutral-500); letter-spacing:0.8px;
      transform:rotate(-2deg);
    }
    .ctaRow{ display:flex; gap:22px; align-items:center; margin-top:36px; }
    .ctaIcon{ width:64px; height:64px; }
    .ctaIcon svg{ width:100%; height:100%; }
    .arrow{ position:absolute; right:170px; top:680px; width:320px; height:220px; opacity:0.9; transform:rotate(-8deg); }
    .arrow svg{ width:100%; height:100%; }

    /* VagasUX carousel chrome (matches references) */
    .handle{
      position:absolute;
      top:50px;
      left:0;
      right:0;
      text-align:center;
      font-size:28px;
      font-weight:700;
      letter-spacing:0.2px;
      color:rgba(255,255,255,0.88);
      z-index:5;
    }
    .handle.isDark{
      color:rgba(7,0,58,0.82);
    }

    .footerBar{
      position:absolute;
      left:70px;
      top:1242px;
      width:940px;
      height:58px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      z-index:5;
    }
    .footerBar--cover{
      height:54px;
      justify-content:center;
    }
    .footerSlot{
      width:144px;
      height:58px;
      flex:0 0 144px;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    .footerCount{
      width:134px;
      font-size:40px;
      font-weight:400;
      line-height:1.2;
      letter-spacing:0;
      text-align:center;
      color:var(--neutral-500);
    }
    .footerCount.onBlue{
      color:var(--brand-100);
    }
    .footerArrow{
      width:144px;
      height:58px;
      flex:0 0 144px;
      display:flex;
      align-items:center;
      justify-content:center;
      color:rgba(7,0,58,0.78);
    }
    .footerArrow.onBlue{
      color:rgba(255,255,255,0.90);
    }
    .footerArrow svg{
      width:44px;
      height:44px;
      display:block;
    }
    .footerArrow.isFlipped{
      transform:rotate(180deg);
    }
    .footerLogoWrap{
      flex:0 0 auto;
      display:flex;
      align-items:center;
      justify-content:center;
      min-height:58px;
    }
    .footerBar--cover .footerLogoWrap{
      min-height:54px;
    }
    .footerLogo{
      height:58px;
      width:auto;
      display:block;
    }
    .footerBar--cover .footerLogo{
      height:54px;
    }
    .topNext{
      position:absolute;
      top:46px;
      right:62px;
      width:54px;
      height:54px;
      z-index:6;
      opacity:0.95;
    }
    .topNext svg{ width:100%; height:100%; }

    .heroTitleYellow{
      font-size:96px;
      line-height:1.02;
      margin:0;
      font-weight:900;
      letter-spacing:-1px;
      color:var(--comp-300);
    }
    .heroSubtitleLight{
      font-size:44px;
      line-height:1.25;
      margin:26px 0 0;
      font-weight:500;
      color:rgba(255,255,255,0.92);
      max-width:860px;
    }

    .titleDark{
      font-size:74px;
      line-height:1.06;
      margin:0;
      font-weight:900;
      letter-spacing:-0.8px;
      color:var(--neutral-500);
      max-width:920px;
    }
    .bodyMuted{
      font-size:40px;
      line-height:1.28;
      margin:34px 0 0;
      font-weight:500;
      color:var(--neutral-400);
      max-width:900px;
      white-space:pre-line;
    }

    .bulletList{
      margin:34px 0 0;
      padding:0;
      list-style:none;
      display:flex;
      flex-direction:column;
      gap:28px;
      max-width:920px;
    }
    .bulletList li{
      display:flex;
      gap:18px;
      align-items:flex-start;
    }
    .bulletList .bDot{
      width:12px;
      height:12px;
      border-radius:999px;
      background:rgba(7,0,58,0.28);
      margin-top:18px;
      flex:0 0 auto;
    }
    .bulletList .text{
      font-size:40px;
      line-height:1.28;
      color:var(--neutral-400);
      font-weight:500;
    }
    .illustrationZone{
      position:absolute;
      left:0;
      right:0;
      bottom:130px;
      height:440px;
      z-index:2;
      display:flex;
      align-items:flex-end;
      justify-content:center;
      pointer-events:none;
    }
    .illusCard{
      width:880px;
      height:380px;
      border-radius:44px;
      background:rgba(255,255,255,0.10);
      border:1px solid rgba(255,255,255,0.14);
      box-shadow:0 26px 70px rgba(0,0,0,0.14);
      display:flex;
      align-items:center;
      justify-content:center;
      gap:34px;
      padding:44px;
    }
    .illusIcon{
      width:128px;
      height:128px;
      opacity:0.96;
    }
    .illusIcon svg{ width:100%; height:100%; }

    .supportBadge{
      position:absolute;
      right:86px;
      bottom:220px;
      width:260px;
      height:260px;
      border-radius:999px;
      background:rgba(168,176,255,0.20);
      border:1px solid rgba(36,46,144,0.10);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:2;
      pointer-events:none;
    }
    .supportBadge .i{
      width:120px;
      height:120px;
      opacity:0.95;
    }
    .supportBadge .i svg{ width:100%; height:100%; }

    /* Storyset â€” posiÃ§Ãµes sincronizadas com Figma (Cursor Study) */
    .storysetZone{
      position:absolute;
      left:0;
      right:0;
      z-index:2;
      pointer-events:none;
      display:flex;
      justify-content:center;
      overflow:hidden;
    }
    .storysetZone svg{
      width:100%;
      height:auto;
      display:block;
      flex:0 0 auto;
    }
    .storysetZone.zone-01{
      top:365px;
      bottom:125px;
      align-items:flex-start;
      padding-top:84px;
    }
    .storysetZone.zone-01 svg{
      width:757px;
      margin-left:114px;
      filter: drop-shadow(0 18px 40px rgba(0,0,0,0.12));
    }
    .storysetZone.zone-02{
      top:542px;
      bottom:128px;
      align-items:flex-start;
      padding-top:14px;
    }
    .storysetZone.zone-02 svg{ width:1000px; }
    .storysetZone.zone-03{
      top:282px;
      bottom:128px;
      align-items:flex-start;
      padding-top:94px;
    }
    .storysetZone.zone-03 svg{ width:846px; }
    .storysetZone.zone-04{
      top:680px;
      bottom:128px;
      align-items:flex-end;
      justify-content:center;
    }
    .storysetZone.zone-04 svg{
      width:1000px;
    }
    .storysetZone.zone-05{
      top:595px;
      bottom:128px;
      align-items:flex-start;
      padding-top:63px;
    }
    .storysetZone.zone-05 svg{ width:846px; }
    .storysetZone.zone-06{
      top:680px;
      bottom:128px;
      align-items:flex-start;
      padding-top:8px;
    }
    .storysetZone.zone-06 svg{ width:1000px; }
    .storysetZone.zone-07{
      top:680px;
      bottom:128px;
      align-items:flex-end;
    }
    .storysetZone.zone-07 svg{
      width:590px;
      margin-left:-20px;
      transform: translateY(49px);
      transform-origin: bottom center;
    }
    .storysetZone.zone-08{
      top:345px;
      bottom:125px;
      align-items:flex-start;
      justify-content:flex-start;
      padding-top:141px;
      padding-left:251px;
    }
    .storysetZone.zone-08 svg{ width:739px; }
    .storysetZone.onBlue svg{
      filter: drop-shadow(0 22px 48px rgba(0,0,0,0.14));
    }
    .contentTop{
      position:relative;
      z-index:4;
      max-width:760px;
    }
    .contentTop.onBlueHero{
      z-index:5;
    }
    .contentTop.compact .bulletList{
      gap:22px;
      margin-top:28px;
    }
    .contentTop.compact .bodyMuted{
      margin-top:22px;
    }

    /* Shape system closer to references (subtle, low noise) */
    .shapeSoft{
      position:absolute;
      inset:0;
      z-index:1;
      pointer-events:none;
      background:
        radial-gradient(900px 900px at 115% 15%, rgba(168,176,255,0.38), rgba(168,176,255,0) 60%),
        radial-gradient(860px 860px at -10% 90%, rgba(239,240,255,0.95), rgba(239,240,255,0) 58%);
      opacity:0.9;
    }
  `;
}

function htmlDoc({ title, css, body }) {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <style>${css}</style>
  </head>
  <body>${body}</body>
</html>`;
}

function navArrow(direction, onBlue) {
  const stroke = onBlue ? "rgba(255,255,255,0.90)" : "rgba(7,0,58,0.78)";
  const path =
    direction === "left"
      ? `<path d="M58 18L30 44l28 26" fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`
      : `<path d="M30 18l28 26-28 26" fill="none" stroke="${stroke}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;
  return `<svg viewBox="0 0 88 88" aria-hidden="true">${path}</svg>`;
}

function storysetExtra(svgMarkup, { onBlue = false, zone = "" } = {}) {
  if (!svgMarkup) return "";
  const cls = ["storysetZone", zone ? `zone-${zone}` : "", onBlue ? "onBlue" : ""]
    .filter(Boolean)
    .join(" ");
  return `<div class="${cls}" aria-hidden="true">${svgMarkup}</div>`;
}

function removeSvgGroupById(svg, id) {
  const re = new RegExp(`<g\\s+id="${id}"`, "i");
  const match = svg.match(re);
  if (!match) return svg;

  const start = svg.indexOf(match[0]);
  let depth = 0;
  let i = start;
  while (i < svg.length) {
    if (svg.slice(i).startsWith("<g")) depth += 1;
    if (svg.slice(i).startsWith("</g>")) {
      depth -= 1;
      if (depth === 0) {
        return svg.slice(0, start) + svg.slice(i + 4);
      }
    }
    i += 1;
  }
  return svg;
}

function hideSvgGroupById(svg, id) {
  return removeSvgGroupById(svg, id);
}

function setSvgViewBox(svg, viewBox) {
  return svg.replace(/viewBox="[^"]+"/, `viewBox="${viewBox}"`);
}

function processStorysetSvg(id, svg) {
  if (id === "03") {
    let out = removeSvgGroupById(svg, "Banner");
    return removeSvgGroupById(out, "Text");
  }
  if (id === "04") {
    let out = removeSvgGroupById(svg, "Screen");
    out = removeSvgGroupById(out, "character-1");
    out = removeSvgGroupById(out, "background-simple");
    out = out.replace(
      /<polygon points="52\.55 432\.67 298\.29 432\.67 303\.4 331\.84 47\.44 331\.84 52\.55 432\.67"[^>]*><\/polygon>/,
      ""
    );
    out = out.replace(/<path d="M436\.73,465[^"]*"[^>]*><\/path>/, "");
    // Figma: svg y=-457.6 dentro da zona de 542px â†’ crop do terÃ§o inferior
    return setSvgViewBox(out, "0 229 500 271");
  }
  if (id === "06") {
    return setSvgViewBox(svg, "0 35 500 430");
  }
  if (id === "08") {
    let out = removeSvgGroupById(svg, "Dog");
    out = removeSvgGroupById(out, "screen-1");
    out = removeSvgGroupById(out, "screen-2");
    out = out.replace(/<rect x="107\.64" y="121\.96" width="139\.61" height="179\.13"[^>]*><\/rect>/, "");
    out = out.replace(/<rect x="111\.8" y="143\.75" width="131\.28" height="115\.23"[^>]*><\/rect>/, "");
    out = out.replace(
      /<path d="M247\.25,301\.09l-139\.61[^"]*"[^>]*><\/path>/,
      ""
    );
    out = out.replace(/<rect x="387\.13" y="61\.01" width="46\.37" height="34\.67"[^>]*><\/rect>/, "");
    out = out.replace(/<rect x="229\.15" y="208\.65" width="46\.37" height="34\.67"[^>]*><\/rect>/, "");
    out = out.replace(/<rect x="272\.31" y="172\.27" width="30\.12" height="22\.52"[^>]*><\/rect>/, "");
    out = out.replace(/<path d="M121[^"]*"[^>]*><\/path>/g, "");
    out = out.replace(/<path d="M121\.86[^"]*"[^>]*><\/path>/g, "");
    out = out.replace(/<path d="M234\.41,132[^"]*"[^>]*><\/path>/g, "");
    return out;
  }
  return svg;
}

async function loadStorysetSvg(id, { onBlue = false } = {}) {
  const suffix = onBlue ? "-on-blue" : "";
  const filePath = path.join(STORYSET_DIR, `${id}${suffix}.svg`);
  try {
    return (await fs.readFile(filePath, "utf8"))
      .replace(/<\?xml[^?]*\?>/gi, "")
      .trim();
  } catch {
    if (onBlue) return loadStorysetSvg(id, { onBlue: false });
    return "";
  }
}

function footerCount(text, onBlue) {
  if (!text) return `<div class="footerSlot" aria-hidden="true"></div>`;
  const cls = onBlue ? "footerCount onBlue" : "footerCount";
  return `<div class="footerSlot"><span class="${cls}">${escapeHtml(text)}</span></div>`;
}

function footerArrow(onBlue, { flip = false } = {}) {
  const cls = [
    "footerArrow",
    onBlue ? "onBlue" : "",
    flip ? "isFlipped" : ""
  ]
    .filter(Boolean)
    .join(" ");
  return `<div class="${cls}" aria-hidden="true">${navArrow("right", onBlue)}</div>`;
}

function renderFooterBar({ footerVariant, countText, onBlue, logos }) {
  const logoSrc = onBlue ? logos.white : logos.dark;
  const logo = logoSrc
    ? `<img class="footerLogo${onBlue ? " onBlue" : ""}" src="${logoSrc}" alt="" />`
    : "";
  const logoWrap = `<div class="footerLogoWrap">${logo}</div>`;

  if (footerVariant === "cover") {
    return `<div class="footerBar footerBar--cover">${logoWrap}</div>`;
  }

  if (footerVariant === "cta") {
    return `<div class="footerBar">${footerArrow(onBlue, { flip: true })}${logoWrap}${footerCount(countText, onBlue)}</div>`;
  }

  return `<div class="footerBar">${footerCount(countText, onBlue)}${logoWrap}${footerArrow(onBlue)}</div>`;
}

function slide({
  bg,
  content,
  countText,
  extra = "",
  handleVariant = "dark",
  footerVariant = "standard",
  showNext = false,
  showShapes = true,
  logos = { dark: "", white: "" }
}) {
  const onBlue = handleVariant === "blue";
  const handleClass = onBlue ? "" : "isDark";
  const nextStroke = onBlue ? "rgba(255,255,255,0.92)" : "rgba(7,0,58,0.78)";

  return `
    <main class="slide grain" style="background:${bg};">
      ${showShapes ? `<div class="shapeSoft"></div>` : ""}
      <div class="handle ${handleClass}">@vagasux</div>
      ${
        showNext
          ? `<div class="topNext" aria-hidden="true">
               <svg viewBox="0 0 88 88"><path d="M30 18l28 26-28 26" fill="none" stroke="${nextStroke}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>`
          : ""
      }
      <section class="pad" style="position:relative; z-index:3;">${content}</section>
      ${renderFooterBar({ footerVariant, countText, onBlue, logos })}
      ${extra}
    </main>
  `;
}

function slide1(logos, storyset01) {
  return slide({
    bg: "var(--brand-400)",
    handleVariant: "blue",
    footerVariant: "cover",
    showNext: true,
    showShapes: false,
    logos,
    index: 0,
    total: 8,
    extra: storysetExtra(storyset01, { onBlue: true, zone: "01" }),
    content: `
      <div class="contentTop onBlueHero">
        <div class="heroTitleYellow" style="margin-top:23px; max-width:860px;">VagasUX</div>
        <div class="heroSubtitleLight" style="max-width:820px;">um guarda-chuva pra sua carreira em UX &amp; Produto</div>
      </div>
    `
  });
}

function slide2(logos, storyset02) {
  return slide({
    bg: "var(--neutral-100)",
    countText: "2 de 8",
    showNext: true,
    logos,
    index: 1,
    total: 8,
    extra: storysetExtra(storyset02, { zone: "02" }),
    content: `
      <div class="contentTop">
        <div class="titleDark">A VagasUX Ã© comunidade.</div>
        <div class="bodyMuted">Curadoria de vagas + conteÃºdo Ãºtil + troca real.\nSem elitismo. Sem gatekeeping.</div>
      </div>
    `
  });
}

function slide3(logos, storyset03) {
  return slide({
    bg: "var(--brand-100)",
    countText: "3 de 8",
    showNext: true,
    logos,
    index: 2,
    total: 8,
    extra: storysetExtra(storyset03, { zone: "03" }),
    content: `
      <div class="contentTop compact">
        <div class="titleDark">Se vocÃª tÃ¡ em UX, isso Ã© pra vocÃª.</div>
        <ul class="bulletList">
          <li><span class="bDot"></span><span class="text">Quem tÃ¡ comeÃ§ando em UX/Produto/Design</span></li>
          <li><span class="bDot"></span><span class="text">Quem jÃ¡ atua e quer se atualizar</span></li>
          <li><span class="bDot"></span><span class="text">Quem quer migrar com apoio</span></li>
        </ul>
      </div>
    `
  });
}

function slide4(logos, storyset04) {
  return slide({
    bg: "var(--neutral-100)",
    countText: "4 de 8",
    showNext: true,
    logos,
    index: 3,
    total: 8,
    extra: storysetExtra(storyset04, { zone: "04" }),
    content: `
      <div class="contentTop compact">
        <div class="titleDark">Tudo pra crescer com clareza.</div>
        <ul class="bulletList">
          <li><span class="bDot"></span><span class="text">Vagas (com curadoria)</span></li>
          <li><span class="bDot"></span><span class="text">ConteÃºdo pra carreira e portfÃ³lio</span></li>
          <li><span class="bDot"></span><span class="text">Networking sem vergonha de pedir ajuda</span></li>
          <li><span class="bDot"></span><span class="text">Apoio pra crescer junto</span></li>
        </ul>
      </div>
    `
  });
}

function slide5(logos, storyset05) {
  return slide({
    bg: "var(--brand-100)",
    countText: "5 de 8",
    showNext: true,
    logos,
    index: 4,
    total: 8,
    extra: storysetExtra(storyset05, { zone: "05" }),
    content: `
      <div class="contentTop compact">
        <div class="titleDark">TrÃªs passos.</div>
        <ul class="bulletList">
          <li><span class="bDot"></span><span class="text"><strong style="color:var(--neutral-500); font-weight:900;">1)</strong> Siga a VagasUX</span></li>
          <li><span class="bDot"></span><span class="text"><strong style="color:var(--neutral-500); font-weight:900;">2)</strong> Entre na comunidade (link da bio)</span></li>
          <li><span class="bDot"></span><span class="text"><strong style="color:var(--neutral-500); font-weight:900;">3)</strong> Se apresente e participe</span></li>
        </ul>
        <div class="note" style="margin-top:40px;">ComeÃ§a devagar. O importante Ã© aparecer.</div>
      </div>
    `
  });
}

function slide6(logos, storyset06) {
  return slide({
    bg: "var(--neutral-100)",
    countText: "6 de 8",
    showNext: true,
    logos,
    index: 5,
    total: 8,
    extra: storysetExtra(storyset06, { zone: "06" }),
    content: `
      <div class="contentTop compact">
        <div class="titleDark">Sem pressÃ£o. SÃ³ presenÃ§a.</div>
        <ul class="bulletList">
          <li><span class="bDot"></span><span class="text">Compartilhe vagas que encontrar</span></li>
          <li><span class="bDot"></span><span class="text">Indique conteÃºdos e ferramentas</span></li>
          <li><span class="bDot"></span><span class="text">Conte aprendizados (atÃ© os perrengues)</span></li>
        </ul>
      </div>
    `
  });
}

function slide7(logos, storyset07) {
  return slide({
    bg: "var(--brand-100)",
    countText: "7 de 8",
    showNext: true,
    logos,
    index: 6,
    total: 8,
    extra: storysetExtra(storyset07, { zone: "07" }),
    content: `
      <div class="contentTop compact">
        <div class="titleDark">EspaÃ§o seguro e humano</div>
        <ul class="bulletList">
          <li><span class="bDot"></span><span class="text">Respeito e acolhimento sempre</span></li>
          <li><span class="bDot"></span><span class="text">Clareza &gt; ego</span></li>
          <li><span class="bDot"></span><span class="text">ColaboraÃ§Ã£o &gt; competiÃ§Ã£o</span></li>
          <li><span class="bDot"></span><span class="text">Sem buzzword e sem papo coach</span></li>
        </ul>
      </div>
    `
  });
}

function slide8(logos, storyset08) {
  return slide({
    bg: "var(--brand-400)",
    handleVariant: "blue",
    footerVariant: "cta",
    countText: "8 de 8",
    showNext: false,
    showShapes: false,
    logos,
    index: 7,
    total: 8,
    extra: storysetExtra(storyset08, { onBlue: true, zone: "08" }),
    content: `
      <div class="contentTop onBlueHero">
        <div class="heroTitleYellow" style="margin-top:10px; max-width:860px;">Curtiu?</div>
        <div class="heroSubtitleLight" style="max-width:860px;">Se isso te ajudou, segue a VagasUX.\nCurte e salva pra lembrar depois.\nE manda pra alguÃ©m que tÃ¡ entrando em UX.</div>
      </div>
    `
  });
}

const SLIDES = [
  { id: "01", title: "VagasUX â€” Capa", render: slide1 },
  { id: "02", title: "VagasUX â€” O que Ã©", render: slide2 },
  { id: "03", title: "VagasUX â€” Pra quem Ã©", render: slide3 },
  { id: "04", title: "VagasUX â€” O que vocÃª encontra", render: slide4 },
  { id: "05", title: "VagasUX â€” Como participar", render: slide5 },
  { id: "06", title: "VagasUX â€” Como contribuir", render: slide6 },
  { id: "07", title: "VagasUX â€” Combinado", render: slide7 },
  { id: "08", title: "VagasUX â€” CTA", render: slide8 }
];


async function writeCarouselPdf(slideIds) {
  const pdfPath = path.join(OUT_DIR, "carousel-vagasux.pdf");
  const pdfDoc = await PDFDocument.create();

  for (const id of slideIds) {
    const pngPath = path.join(OUT_DIR, `${id}.png`);
    const pngBytes = await fs.readFile(pngPath);
    const image = await pdfDoc.embedPng(pngBytes);
    const page = pdfDoc.addPage([image.width, image.height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height
    });
  }

  await fs.writeFile(pdfPath, await pdfDoc.save());
  process.stdout.write(`exported ${pdfPath}\n`);
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  // Use Microsoft Edge headless to export PNGs without npm deps.
  const edgePath =
    process.env.EDGE_PATH ||
    "C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe";

  // Write temp HTML files per slide, then screenshot each one.
  const tmpDir = path.join(OUT_DIR, "_html");
  await fs.mkdir(tmpDir, { recursive: true });

  const logos = {
    dark: await loadSvgDataUri(path.join(ASSETS_DIR, "Brand-VagasUX.svg")),
    white: await loadSvgDataUri(path.join(ASSETS_DIR, "Brand-VagasUX-White.svg"))
  };
  const storyset01 = processStorysetSvg("01", await loadStorysetSvg("01", { onBlue: true }));
  const storyset02 = processStorysetSvg("02", await loadStorysetSvg("02"));
  const storyset03 = processStorysetSvg("03", await loadStorysetSvg("03"));
  const storyset04 = processStorysetSvg("04", await loadStorysetSvg("04"));
  const storyset05 = processStorysetSvg("05", await loadStorysetSvg("05"));
  const storyset06 = processStorysetSvg("06", await loadStorysetSvg("06"));
  const storyset07 = processStorysetSvg("07", await loadStorysetSvg("07"));
  const storyset08 = processStorysetSvg("08", await loadStorysetSvg("08", { onBlue: true }));

  const storyBySlide = {
    "01": storyset01,
    "02": storyset02,
    "03": storyset03,
    "04": storyset04,
    "05": storyset05,
    "06": storyset06,
    "07": storyset07,
    "08": storyset08
  };

  for (const s of SLIDES) {
    const htmlPath = path.join(tmpDir, `${s.id}.html`);
    const doc = htmlDoc({
      title: s.title,
      css: baseCss(),
      body: s.render(logos, storyBySlide[s.id])
    });
    await writeHtmlFile(htmlPath, doc);

    if (process.argv.includes("--html-only")) {
      process.stdout.write(`wrote ${htmlPath}\n`);
      continue;
    }

    const outPath = path.join(OUT_DIR, `${s.id}.png`);
    await runEdgeScreenshot({
      edgePath,
      url: pathToFileURL(htmlPath).toString(),
      outPath
    });

    process.stdout.write(`exported ${outPath}\n`);
  }
  if (!process.argv.includes("--html-only")) {
    await writeCarouselPdf(SLIDES.map((s) => s.id));
  }
}

async function writeHtmlFile(htmlPath, doc) {
  const tmpPath = `${htmlPath}.tmp`;
  await fs.writeFile(tmpPath, doc, "utf8");

  const written = await fs.readFile(tmpPath, "utf8");
  if (!written.startsWith("<!doctype html>") || !written.includes('class="slide grain"')) {
    await fs.unlink(tmpPath).catch(() => {});
    throw new Error(`HTML invÃ¡lido ao gerar ${htmlPath}`);
  }

  await fs.rename(tmpPath, htmlPath);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

function runEdgeScreenshot({ edgePath, url, outPath }) {
  return new Promise((resolve, reject) => {
    const args = [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--window-size=1080,1350",
      "--force-device-scale-factor=2",
      "--virtual-time-budget=1500",
      `--screenshot=${outPath}`,
      url
    ];

    const child = spawn(edgePath, args, { stdio: ["ignore", "pipe", "pipe"] });

    let stderr = "";
    child.stderr.on("data", (d) => {
      stderr += d.toString();
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) return resolve();
      reject(new Error(`Edge screenshot failed (code ${code}). ${stderr.trim()}`));
    });
  });
}

async function loadSvgDataUri(filePath) {
  const svg = (await fs.readFile(filePath, "utf8")).trim();
  const encoded = encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");
  return `data:image/svg+xml,${encoded}`;
}

