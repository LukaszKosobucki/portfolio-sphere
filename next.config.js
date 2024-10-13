// @ts-check
const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio-sphere" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: basePath,
  assetPrefix: basePath,
  /* config options here */
};

module.exports = nextConfig;
