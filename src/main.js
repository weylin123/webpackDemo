// import $ from 'jquery'
// import moment from 'moment'

// require('./js/module.js')
import './js/module.js'

// 在webpack中, 一切的静态资源, 都可以当成模块, 包括 css html, png js...
// You may need an appropriate loader to handle this file type => 
// 你需要一个合适的loader去处理当前文件

// webpack默认只识别 js 和 json 文件, 如果你需要加载其他类型的文件, 需要配置对应的loader
// 加载 css  =>  css-loader
// 加载 less =>  less-loader

// 加载图片, 需要用到两个loader模块, url-loader file-loader

// 加载css文件
import './css/index.css'
import './css/test.css'

// 加载less文件
import './less/header.less'

// 加载字体图标的css
import './fonts/iconfont.css'
import request from './request/request'


// 需求1: 通过jquery实现隔行变色
// 需求2: 通过moment设置最后一个li, 展示日期
// $(function() {
//   $('#app li:nth-child(2n)').css('color', 'red')
//   $('#app li:nth-child(2n+1)').css('color', 'green')

//   $('#app li:last-child').text(moment().format('YYYY-MM-DD HH:mm:ss'))
// })
// console.log('这是main.js')


// webpack默认做了一些新版本语法的兼容, 只是兼容的是模块化语法, 比如: require
// 其他的新版本语法, 其实webpack默认是没有做兼容处理的, 比如: const let 箭头函数 ...

const sayHi = () => {
  console.log('你好哇')
}
sayHi()
request(
  {method:'post',
  url:'post',
  data:{
    username:'张三'
  },
  params:{
    Id:123
  }
}).then((res) => {
  console.log(res)
})
