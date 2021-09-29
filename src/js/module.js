// 任何一个js文件, 都可以当成一个模块
// 但是模块化环境中, 每个模块的作用域的都是独立的
// 直接导入一个模块
// import './a.js'

// es6中的导入和导出
// 导入import 导出export
// 1. 精确导出: 可以导出多个值, 将来可以按需导入
// export function fn () { ... }
// export const num = 11
// export const arr = []
// export const obj = {}

// 精确导出, 可以实现按需导入, 需要什么导入什么
// import { fn, num, arr } from './模块.js'

// 2. 默认导出: 一个模块只能导出一个值
// export default 值
// import 变量名 from './模块'


// 如果一个模块只有一个导出, 推荐使用默认导出
// 但是如果一个模块有多个导出, 推荐使用精确导出, 将来可以按需导入

// -------------------------------------------------------------
// 精确导出: 导入演示
// import { num1, name, age } from './a.js'
// console.log(num1)
// console.log(name)
// console.log(age)
// import { add, tellStory } from './a.js'
// console.log(add(1, 1))
// tellStory()
// ------------------------------------------------------------
// 默认导出: 导入演示
// import 变量名 from './模块.js'
// import result from './b.js' 
// console.log(result)