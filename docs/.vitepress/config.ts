import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Odyssey Exchange | Первая Memecoin Биржа",
  description: "Первая Мем биржа, ликвидации никогда еще не были такими веселыми!",
  sitemap: {
    hostname: 'https://odyssey.cash',
    lastmodDateOnly: false,
    changefreq: 'weekly',
    priority: 0.8,
    urls: [
      '/',
      '/about',
      '/services',
      '/partnership',
      '/solutions',
      '/contact',
      '/guide/getting-started',
      '/guide/why-partner',
      '/guide/integration',
      '/guide/revenue-models'
    ]
  },
  themeConfig: {
    // ... rest of your existing themeConfig
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ]
})
