const path = require('path').join
const tailwindcss = path(__dirname, 'tailwind.config.js')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/tailwind.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/content",
    'nuxt-purgecss'
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: [
        require('tailwindcss')(tailwindcss), 
        require('autoprefixer')
      ]
    },
    preset: {
      autoprefixer: {
        grid: true
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production') //TODO: add env later
  },
  /*
  ** Server configuration
  */
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }
}
