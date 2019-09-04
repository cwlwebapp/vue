'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    // 打入包的文件夹
    assetsSubDirectory: 'static',
    //根目录
    assetsPublicPath: '/',
    // 开发代理
    proxyTable: {},

    // Various Dev Server settings
    // 本地地址
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    // 自动打开
    autoOpenBrowser: false,
    // 下面两个都是浏览器展示错误的方式
    //  在浏览器是否展示错误蒙层
    errorOverlay: true,
    // 是否展示错误的通知
    notifyOnErrors: true,
    // 这个是webpack-dev-servr的watchOptions的一个选项，指定webpack检查文件的方式
    // 因为webpack使用文件系统去获取文件改变的通知。在有些情况下，这个可能不起作用。例如，当使用NFC的时候，
    // vagrant也会在这方面存在很多问题，在这些情况下，使用poll选项（以轮询的方式去检查文件是否改变）可以设定为true
    // 或者具体的数值，指定文件查询的具体周期。
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // 是否使用eslint loader去检查代码
    // useEslint: true,
    // 如果设置为true，在浏览器中，eslint的错误和警告会以蒙层的方式展现。
    // showEslintErrorsInOverlay: false,
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    // webpack-devtool有7种模式，cheap-module-eval-source-map模式是比较快的开发模式 maps的格式
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting

    // 指定是否通过在文件名称后面添加一个查询字符串来创建source map的缓存
    cacheBusting: true,

    // 关闭css的source map
    cssSourceMap: true
  },

  build: {
    //// html文件的生成的地方
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    // 根目录对应的文件 // 编译生成的文件的目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    //   // 编译生成的静态文件的目录
    assetsSubDirectory: 'static',
    // ‘/‘指的是项目的根目录 ，’./‘指的是当前目录。 // 编译发布的根目录，可配置为资源服务器域名或者cdn域名
    assetsPublicPath: '/',

    /**
     * Source Maps
     */
    //.map 为了知道代码哪里错了
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 压缩模式  // 是否开启生产环境的gzip压缩
    productionGzip: true,
    // 开启gzip压缩的文件的后缀名称
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 如果这个选项是true的话，那么则会在build后，会在浏览器中生成一份bundler报告
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
