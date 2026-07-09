const url = process.argv[2] || "https://storyset.com/illustration/ui-ux-team/cuate";
const html = await fetch(url).then((r) => r.text());
const svgUrls = [...html.matchAll(/https?:\/\/[^"'\\s]+\.svg/g)].map((m) => m[0]);
const apiLike = [...html.matchAll(/https?:\/\/[^"'\\s]+(api|download|asset)[^"'\\s]*/gi)].map((m) => m[0]);
console.log("svg urls", [...new Set(svgUrls)].slice(0, 30));
console.log("api-like", [...new Set(apiLike)].slice(0, 30));
const next = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
if (next) {
  const data = JSON.parse(next[1]);
  console.log("next keys", Object.keys(data));
  const blob = JSON.stringify(data).slice(0, 2000);
  console.log("next sample", blob);
}
