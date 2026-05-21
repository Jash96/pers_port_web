import type { NextConfig } from "next";
import path from "path";

const generatedArtifactDirs = [
  ".playwright-mcp",
  "playwright-out",
  ".agents",
  ".agent",
  ".claude",
] as const;

const generatedArtifactIgnorePatterns = generatedArtifactDirs.flatMap((dir) => [
  `**/${dir}`,
  `**/${dir}/**`,
]);

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  webpack: (config) => {
    const existingIgnored = config.watchOptions?.ignored;
    const ignored: string[] = Array.isArray(existingIgnored)
      ? existingIgnored
      : typeof existingIgnored === "string"
        ? [existingIgnored]
        : [];

    config.watchOptions = {
      ...config.watchOptions,
      ignored: [...ignored, ...generatedArtifactIgnorePatterns],
    };

    return config;
  },
};

export default nextConfig;
