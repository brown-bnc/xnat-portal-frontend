export default {
  components: true,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the router
   */
  router: {
    middleware: ['auth']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    //'@brown-ccv/disco-styles',
    './node_modules/@brown-ccv/disco-styles/scss/disco.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://auth.nuxtjs.org/usage
    '@nuxtjs/auth',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://localhost:4000',
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/api/options.html
   */
  auth: {
    redirect: {
      logout: '/login'
    },
    strategies: {
      shib: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://datasci.brown.edu/keycloak/auth/realms/ccv-shib/protocol/openid-connect/auth',
        access_token_endpoint: 'https://datasci.brown.edu/keycloak/auth/realms/ccv-shib/protocol/openid-connect/token',
        userinfo_endpoint: 'https://datasci.brown.edu/keycloak/auth/realms/ccv-shib/protocol/openid-connect/userinfo',
        scope: ['openid', 'profile', 'email'],
        grant_type: 'authorization_code',
        response_type: 'code',
        token_type: 'Bearer',
        client_id: 'xnat-portal',
        token_key: 'access_token',
      },
      tokenRequired: false,
      tokenType: false
    }
  }
}
