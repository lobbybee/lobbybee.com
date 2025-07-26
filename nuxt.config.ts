// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'LobbyBee - WhatsApp-Native Hotel CRM',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'LobbyBee simplifies guest check-in, service requests, and internal routing — all through WhatsApp.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'LobbyBee' },
        { name: 'keywords', content: 'hotel CRM, WhatsApp hotel management, guest check-in, hotel service requests, hotel management system' },
        { property: 'og:title', content: 'LobbyBee - WhatsApp-Native Hotel CRM' },
        { property: 'og:description', content: 'LobbyBee simplifies guest check-in, service requests, and internal routing — all through WhatsApp.' },
        { property: 'og:image', content: 'https://lobbybee.com/og.jpeg' },
        { property: 'og:url', content: 'https://lobbybee.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'LobbyBee' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'LobbyBee - WhatsApp-Native Hotel CRM' },
        { name: 'twitter:description', content: 'LobbyBee simplifies guest check-in, service requests, and internal routing — all through WhatsApp.' },
        { name: 'twitter:image', content: 'https://lobbybee.com/og.jpeg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
        { rel: 'canonical', href: 'https://lobbybee.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', rel: 'stylesheet' }
      ]
    }
  }
})
