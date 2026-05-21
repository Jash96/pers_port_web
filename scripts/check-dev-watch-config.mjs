import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredIgnoredDirs = [
  ".playwright-mcp",
  "playwright-out",
  ".agents",
  ".agent",
  ".claude",
];

function readText(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const nextConfig = readText("next.config.ts");
const tsconfig = JSON.parse(readText("tsconfig.json"));

assert(
  nextConfig.includes("watchOptions") && nextConfig.includes("ignored"),
  "next.config.ts must configure webpack watchOptions.ignored for generated local artifact folders.",
);

assert(
  !nextConfig.includes("new RegExp"),
  "next.config.ts must use string glob watch ignores; this Webpack schema rejects arrays of RegExp values.",
);

for (const dir of requiredIgnoredDirs) {
  assert(
    nextConfig.includes(dir),
    `next.config.ts must ignore ${dir} in webpack dev watch mode.`,
  );
  assert(
    tsconfig.exclude?.some((entry) => entry.includes(dir)),
    `tsconfig.json must exclude ${dir}.`,
  );
}

const include = tsconfig.include ?? [];
assert(
  !include.includes("**/*.ts") && !include.includes("**/*.tsx") && !include.includes("**/*.mts"),
  "tsconfig.json include must not glob every TS file in the repo; keep it scoped to source/config files.",
);

console.log("Dev watch config ignores generated local artifact folders.");
