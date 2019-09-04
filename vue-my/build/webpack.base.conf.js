'use strict'
// node路径
const path = require('path')
// node 工具类方法
const utils = require('./utils')
// 配置
const config = require('../config')
// vue-loader.conf配置文件是用来解决各种css文件 的，定义了诸如css,less,sass之类的和样式有关的loader
const vueLoaderConfig = require('./vue-loader.conf')
// 此函数是用来返回当前目录的平行目录的路径，
function resolve(dir) {
  // 生成相对于根目录的绝对路径
  return path.join(__dirname, '..', dir)
}

// eslint的规则
// const createLintingRule = () => ({
//   // 对.js和.vue结尾的文件进行eslint检查
//   test: /\.(js|vue)$/,
//   // 使用eslint-loader
//   loader: 'eslint-loader',
//   // enforce的值可能是pre和post。其中pre有点和webpack@1中的preLoader配置含义相似。
//   // post和v1中的postLoader配置含义相似。表示loader的调用时机
//   // 这里表示在调用其他loader之前需要先调用这个规则进行代码风格的检查
//   enforce: 'pre',
//   // 需要进行eslint检查的文件的目录存在的地方
//   include: [resolve('src'), resolve('test')],
//   // eslint-loader配置过程中需要指定的选项
//   options: {
//     // 文件风格的检查的格式化程序，这里使用的是第三方的eslint-friendly-formatter
//     formatter: require('eslint-friendly-formatter'),
//     // 是否需要eslint输出警告信息
//     emitWarning: !config.dev.showEslintErrorsInOverlay
//   }
// })
module.exports = {
  //  // webpack解析文件时候的根目录(如果把webpack.config.js)放在了项目的根目录下面，这个配置可以省略
  context: path.resolve(__dirname, '../'),
  // 项目入口
  entry: {
    app: './src/main.js'
  },
  // 项目的输出配置
  output: {
    // 路径是config目录下的index.js中的build配置中的assetsRoot，也就是dist目录     // 项目build的时候，生成的文件的存放路径(这里的路径是../dist)
    path: config.build.assetsRoot,
    // 生成文件的名称
    filename: '[name].js',
    // 上线地址，也就是真正的文件引用路径，如果是production生产环境，其实这里都是 '/'   // 输出解析文件的目录，url 相对于 HTML 页面(生成的html文件中，css和js等静态文件的url前缀)
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // resolve是webpack的内置选项，顾名思义，决定要做的事情，
  //也就是说当使用 import "jquery"，该如何去执行这件事情，就是resolve配置项要做的，import jQuery from "./additional/dist/js/jquery" 这样会很麻烦，可以起个别名简化操作
  // 配置模块解析时候的一些选项
  resolve: {
    // 省略扩展名，比方说import index form '../js/index', 会默认去找index文件，然后找index.js,.vue,.josn.
    extensions: ['.js', '.vue', '.json'],
    // 使用上面的resolve函数，意思是用@代替src的绝对路径
    alias: {
      '@': resolve('src'),
    }
  },
  // 使用模块  
  // 下面是针对具体的模块进行的具体的配置
  // 下面的配置语法采用的是version >= @2的版本
  module: {
    // 不同的模块使用不同的loader
    rules: [
      // 对vue文件，使用vue-loader解析 .vue文件的配置
      {
        // 这个属性是一个正则表达式，用于匹配文件。这里匹配的是.vue文件
        test: /\.vue$/,
        // 指定该种类型文件的加载器名称
        loader: 'vue-loader',
        // 针对此加载器的具体配置
        // 针对前面的分析，这个配置对象中包含了各种css类型文件的配置，css source map的配置 以及一些transform的配置
        options: vueLoaderConfig
      },
      // babel-loader把es6解析成es5
      {
        // .js文件的配置
        test: /\.js$/,
        // js文件的处理主要使用的是babel-loader。在这里没有指定具体的编译规则，babel-loader会自动
        // 读取根目录下面的.babelrc中的babel配置用于编译js文件
         /**
         * {
         * // 使用的预设
            "presets": [
              // babel-preset-env: 根据你所支持的环境自动决定具体类型的babel插件
              ["env", {
                // modules设置为false，不会转换module
                "modules": false
              }],
              // babel-preset-stage-2: 可以使用所有>=stage2语法
              "stage-2"
            ],
            // 使用的插件
            // babel-plugin-transform-runtime: 只会对es6的语法进行转换而不会对新的api进行转换
            // 如果需要支持新的api，请引入babel-polyfill
            "plugins": ["transform-runtime"]
          }

         */
        loader: 'babel-loader',
          // 指定需要进行编译的文件的路径
        // 这里表示只对src和test文件夹中的文件进行编译
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      // url-loader将文件大小低于下面option中limit的图片，转化为一个64位的DataURL，这样会省去很多请求，
      //大于limit的，按[name].[hash:7].[ext]的命名方式放到了static/img下面，方便做cache
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      // 音频和视频文件处理，同上
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      // 字体处理，同上　
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {

    // 这个配置是一个对象，其中的每个属性都是nodejs全局变量或模块的名称
    // false表示什么都不提供。如果获取此对象的代码，可能会因为获取不到此对象而触发ReferenceError错误
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    // 设置成empty则表示提供一个空对象
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
