const px2rem = require('postcss-px2rem')
// const CompressionPlugin = require('compression-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const postcss = px2rem({
  remUnit: 16,   //基准大小 baseSize，需要和rem.js中相同
})
const isProduction = process.env.NODE_ENV === 'production';
// cdn预加载使用
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  // 'element-ui': 'ELEMENT'
 }
const cdn= {
  // 开发环境
  dev: {
    css: [
      // 'https://unpkg.com/element-ui@2.11.1/lib/theme-chalk/index.css'
    ],
    js: []
  },
  // 生产环境
  build: {
    css: [
      // 'https://unpkg.com/element-ui@2.11.1/lib/theme-chalk/index.css'
    ],
    js: [
      'https://cj.uniplaza.com/web-srouce/common/js/vue@2.6.10.min.js',
      'https://cj.uniplaza.com/web-srouce/common/js/vue-router@3.1.2.min.js',
      'https://cj.uniplaza.com/web-srouce/common/js/vuex@3.1.1.min.js',
      'https://cj.uniplaza.com/web-srouce/common/js/axios.min.js',
      // 'https://unpkg.com/element-ui@2.11.1/lib/index.js'
    ]
  }
}

module.exports = {
  lintOnSave: false,
  devServer: {
      // proxy: 'https://cj.uniplaza.com',
      // port: 8080,
      // open: true,
      proxy: {
          '/api': {
              target: 'https://cj.uniplaza.com',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              }
          }
      }
  },
  publicPath: isProduction ? './' : '/',
  css: {
      loaderOptions: {
        postcss: {
          plugins: [
            postcss
          ]
        }
      }
  },
  chainWebpack: config => {
      /**
       * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
       */
      config.plugin('html').tap(args => {
        if (isProduction) {
          args[0].cdn = cdn.build
        } else {
          args[0].cdn = cdn.dev
        }
        return args
      })
  },
  
  // 修改webpack config, 使其不打包externals下的资源
  configureWebpack: config => {
      let myConfig = {}
      if (isProduction) {
          // 1. 生产环境npm包转CDN
          myConfig.externals = externals
          myConfig.plugins = []
          myConfig.plugins.push(
            new UglifyPlugin({
              uglifyOptions: {
                  warnings: false,
                  compress: {
                    drop_console: true, 
                    drop_debugger: false,
                    pure_funcs: ['console.log'] 
                  }
              }
            })
          )
          // 2. 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
          // myConfig.plugins.push(
          //   new CompressionPlugin({
          //     test: /\.js$|\.html$\\.css/,
          //     threshold: 8192,
          //     minRatio: 0.8
          //   })
          // )
      }
      return myConfig
  }
 }