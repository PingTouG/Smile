const path = require('path')
const theme = path.resolve(__dirname, './src/utils/vant/overwrite.less')

module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Smile商城'
      return args
    })
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${theme}";`
        }
      }
    }
  },
  devServer: {
    port: 8080,
    proxy: {
      [process.env.VUE_APP_API_BASE_URL]: {
        target: `http://localhost:3000`,
        ws: false,
        changeOrigin: true
      }
    }
  }
}
