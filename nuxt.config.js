const {NODE_ENV = "production"} = process.env;
const isDev = NODE_ENV === "development";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SCEPSA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Tecnología en Soluciones Integrales para Mejora de Procesos y Gestión de Resultados.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-compress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/robots',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es'
    },
    meta: {
      theme_color: '#df0000'
    }
  },

  // Nuxt robots.txt configuration
  robots: {
    UserAgent: '*',
  },

  'nuxt-compress': {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },


  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:100,300,400,500,700,900']
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false, // for production
    optionsPath: 'vuetify.options.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,

    postcss:
      {
        // disable postcss plugins in development
        plugins: isDev
          ? {} : {
            "@fullhuman/postcss-purgecss": {
              content: [
                'components/**/*.vue',
                'layouts/**/*.vue',
                'pages/**/*.vue',
                'plugins/**/*.js',
                'node_modules/vuetify/src/**/*.ts',
              ],
              styleExtensions: ['.css'],
              safelist: {
                standard: [
                  "body",
                  "html",
                  "code"
                ],
                deep: [
                  /page-enter/,
                  /page-leave/,
                  /dialog-transition/,
                  /tab-transition/,
                  /tab-reversetransition/
                ]
              },
              whitelistPatternsChildren: [/token$/],
              whitelist: [
                'line-numbers', 'tag', 'toolbar-item', 'toolbar',
                'code-toolbar', 'span', 'button', 'line-numbers-rows', 'url-link', 'attr-name', 'attr-value', 'punctuation',
                'keyword', 'keyword-let', 'operator', 'string', 'elevation', 'shadow'
              ],

            },
            "css-byebye": {
              rulesToRemove: [
                /.*\.v-application--is-rtl.*/,
              ]
            }
          }
      },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
