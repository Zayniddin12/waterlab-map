export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  loading: false,
  head: {
    title: 'Waterlab Map',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/static/font/stylesheet.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/ymapPlugin.js',
      mode: 'client',
    },
    {
      src: '~/plugins/element',
    },
    {
      src: '~/plugins/moment',
    },
    {
      src: '~/plugins/cool-lightbox',
    },
    {
      src: '~/plugins/apex-chart',
    },
    {
      src: '~/plugins/vue-i18n',
    }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'https://api.waterlab.uzsuv.uz/api/v1/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: process.env.SERVER_PORT || 3006, // default: 3000
    host: process.env.SERVER_HOST || 'localhost', // default: localhost
  },
}
