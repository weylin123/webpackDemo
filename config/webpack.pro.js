// pro production 生产环境 (上线) (压缩的)
// 导入base
const base = require('./webpack.base.js')
const { merge } = require('webpack-merge')

module.exports = merge(base, {
  // 压缩
  mode: 'production'
})