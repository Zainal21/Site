const builtAt = new Date().toISOString()
const path = require('path')
const { I18N } = require('./locales/i18n-nuxt-config')
import fs from 'fs'
import Mode from "frontmatter-markdown-loader/mode"
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'

// get path markdowm file
function getPaths (lang, type) {
  let initial = lang
  if (lang === 'en') { initial = '' }
  return fs.readdirSync(path.resolve(__dirname, 'contents', `${lang}/${type}`))
    .filter(filename => path.extname(filename) === '.md')
    .map(filename => `${initial}/${type}/${path.parse(filename).name}`)
}

// init md file
const md = new MarkdownIt({
  html: true,
  typographer: true,
})
md.use(mip)

const productionUrl = {
  en: "/en",
  es: "/es"
};
const baseUrl = '#';

export default {
  router : {
    prefetchLinks : false
  },

  env: {
    baseUrl,
    productionUrl
  },
  head: {
    title: 'Muhamad Zainal Arifin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
  
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.6.1/css/all.min.css',
        integrity:'sha512-BxQjx52Ea/sanKjJ426PAhxQJ4BPfahiSb/ohtZ2Ipgrc5wyaTSgTwPhhZ/xC66vvg+N4qoDD1j0VcJAqBTjhQ==',
        crossorigin:'anonymous'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#5a46ff',
    height: '3px'
  },
  /*
  ** Build configuration
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/main.scss',
    '@/assets/css/prism-material-light.css',
  ],
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-purgecss'],
  purgeCSS:{
    extractors: () => [
      {
        extractor(content) {
          return content.match(/[A-z0-9-:\\/]+/g)
        },
        extensions: ['html', 'vue', 'js']
      },
      {
        extractor(content) {
          return content.match(/[A-z0-9-\\/]+/g)
        },
        extensions: ['vue'] 
      }
    ]
  },
  build: {
    extend (config) {
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
          vue: {
            root: "dynamicMarkdown"
          },
          markdown(body) {
            return md.render(body)
          }
        }
      }, {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          placeholder: true,
          quality: 60,
          size: 1400,
          adapter: require('responsive-loader/sharp')
        }
      }, {
        test: /\.(gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      });
    },
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    }
  },
  plugins: [
    '~/plugins/lazyload', 
    '~/plugins/globalComponents',
    '~/plugins/disqus',
     { src: '~plugins/ga.js', 
     ssr: false 
    },],
  modules: [  
    '@nuxtjs/style-resources',
    ['nuxt-i18n', I18N],
    'nuxt-webfontloader',
    ['nuxt-lazy-load', {
        images: true,
        videos: true,
        audios: true,
        iframes: false,
        native: false,
        polyfill: true,
        directiveOnly: false,

        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',
        
    }]
  ],
  webfontloader: {
    custom: {
      families: ['Graphik', 'Tiempos Headline'],
      urls: ['/fonts/fonts.css']
    }
  },

  generate: {
    routes: [
      '/es', '404'
    ]
    .concat(getPaths('es', 'blog'))
    .concat(getPaths('en', 'blog'))
  }
}
