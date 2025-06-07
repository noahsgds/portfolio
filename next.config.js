/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Définir l'URL de base pour GitHub Pages
  const repo = 'portfolio1';
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
