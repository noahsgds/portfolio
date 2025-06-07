/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Désactiver les chemins de base pour simplifier le déploiement initial
  // basePath: isProd ? '/portfolio' : '',
  // assetPrefix: isProd ? 'https://noahsgds.github.io/portfolio/' : '',
  images: {
    unoptimized: true,
  },
  // Désactiver l'optimisation d'image en production
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
