'use strict'
// node npm 版本
require('./check-versions')()
// 上线版本
process.env.NODE_ENV = 'production'
 // 在终端显示的旋转器插件
const ora = require('ora')
// 删除node 服务的文件包
const rm = require('rimraf')
// path路劲文件
const path = require('path')
// 终端文字颜色插件
const chalk = require('chalk')
// webpack,压缩打包
const webpack = require('webpack')
// 获取配置文件的默认配置
const config = require('../config')

const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()
// 删除dist文件夹，之后webpack打包
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
