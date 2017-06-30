// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    //-----若部署目录发生改变，则修改打包目录，如下模拟部署在admin目录下
    //assetsSubDirectory: 'admin/static',
    assetsPublicPath: './', 
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    //dev环境配置代理项
    proxyTable: {
      //  '/v2': {   //context: 确定应将哪些请求代理到目标主机
      //   target: 'https://api.douban.com', //options.target: 目标主机到代理  https://api.douban.com/v2/book/1220562
      //   changeOrigin: true,
      //   pathRewrite: {
      //     // '^/v2': ''  //代理的接口默认会加上proxyTable第一个参数如v2,若接口不需要则pathRewrite里设'^/v2:':''
      //   }
      // }
    },
    cssSourceMap: false
  }
}
