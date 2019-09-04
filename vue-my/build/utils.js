'use strict'
// 引入nodejs的path模块，用于操作路径
const path = require('path')
// 引入模板的配置文件，下面就需要去这个文件中看看有什么基本的配置
const config = require('../config')
// extract-text-webpack-plugin该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象 // 提取特定文件的插件，比如把css文件提取到一个文件中去
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 加载package.json文件
const packageConfig = require('../package.json')
// 返回资源文件路径，path.posix以posix兼容的方式交互，是跨平台的，如果是path.win32的话，只能在win上
exports.assetsPath = function (_path) {
  // 生成编译输出的二级目录
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  // path.posix是path模块跨平台的实现（不同平台的路径表示是不一样的）
  return path.posix.join(assetsSubDirectory, _path)
}
// 通过判断是否是生产环境，配置不同的样式语言的loader配置 // 这个是为在vue文件中的style中使用的css类型
exports.cssLoaders = function (options) {
  options = options || {}
  // 打包css模块
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
 // 编译postcss模块
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // 创建loader加载器字符串，结合extract text插件使用
  // 生成各种loader配置，通过传入不同的loader和option，将不同样式文件语言的loader拼好，push到loader配置中。
  function generateLoaders(loader, loaderOptions) {
       // 通过usePostCSS 来标明是否使用了postcss
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
  // 如果指定了具体的loader的名称
    if (loader) {
       // 向loaders的数组中添加该loader对应的加载器
      // 一个很重要的地方就是，一个数组中的loader加载器，是从右向左执行的。
      loaders.push({
        loader: loader + '-loader',
          // 对应的加载器的配置对象
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // extract-text-webpack-plugin有三个参数，use指需要用什么loader去编译文件；
    // fallback指编译后用什么loader去提取文件；还有一个publicfile用来覆盖项目路径
       // 如果明确指定了需要提取静态文件，则使用
    // ExtractTextPlugin.extract({})来包裹我们的各种css处理器。
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
          // fallback这个选项我们可以这样理解
        // webpack默认会按照loaders中的加载器从右向左调用编译各种css类型文件。如果一切顺利，在loaders中的
        // 各个加载器运行结束之后就会把css文件导入到规定的文件中去，如果不顺利，则继续使用vue-style-loader来处理
        // css文件
        fallback: 'vue-style-loader'
      })
    } else {
         // 如果没有提取行为，则最后再使用vue-style-loader处理css
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // 对不同的样式语言，返回相应的loader
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// 生成处理不同的样式文件处理规则 // 使用这个函数，为那些独立的style文件创建加载器配置。
exports.styleLoaders = function (options) {
   // 保存加载器配置的变量
  const output = []
    // 获取所有css文件类型的loaders
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
      // 生成对应的loader配置
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
    // node-notifier是一个跨平台的包，以类似浏览器的通知的形式展示信息。
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return
  // 只展示错误的信息
    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()
  // 需要展示的错误信息的内容 
    notifier.notify({
       // 通知的标题
      title: packageConfig.name,
      // 通知的主体内容
      message: severity + ': ' + error.name,
       // 副标题
      subtitle: filename || '',
       // 通知展示的icon
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
