// 'use strict'
// webpack第一种配置
// // 使用webpack配置合并插件
// const merge = require('webpack-merge')
// // 编译环境
// const prodEnv = require('./prod.env')

// module.exports = merge(prodEnv, {
//   NODE_ENV: '"development"',
//   api:'"https://www.baidu.com/"'
// })



'use strict'
// webpack第二种配置
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

let params = process.argv[4]
let baseUrl = ''
switch (params) {
  case '--env=test':
    baseUrl = '"http://a.com--env=test"'
    break
  case '--env=prod':
    baseUrl = '"http://b.com--env=prod"'
    break
  default:
    baseUrl = '"http://c.com"'
}
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseUrl: baseUrl
})
