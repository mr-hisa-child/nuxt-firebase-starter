import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-firebase-starter',
    title: 'nuxt-firebase-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/repository'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyCyYkeaSGpWPBK_U7IZ2EaMSaydBs-Ppsw',
      authDomain: 'fwapp-308613.firebaseapp.com',
      projectId: 'fwapp-308613',
      storageBucket: 'fwapp-308613.appspot.com',
      messagingSenderId: '1035320895203',
      appId: '1:1035320895203:web:fbe22331837f8de14e87d6'
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
      functions: true,
      database: false,
      messaging: false,
      performance: false,
      analytics: false,
      remoteConfig: false
    },
    customEnv: false,
    onFirebaseHosting: false,
    lazy: false,
    terminateDatabasesAfterGenerate: false
  },

  i18n: {
    locales: [
      {
        code: 'ja',
        iso: 'ja',
        file: 'ja.json',
      },
    ],
    defaultLocale: 'ja',
    lazy: true,
    langDir: 'locales/',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'ja'
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {

  },

  privateRuntimeConfig: {

  }
}
