/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: produces a plain ./out folder of HTML/CSS/JS,
  // which is exactly what Cloudflare Pages serves.
  output: "export",
  images: {
    // Cloudflare Pages doesn't run Next's image optimization server,
    // so images are served as-is.
    unoptimized: true,
  },
};

module.exports = nextConfig;
