console.log('这是a.js')

// 精确导出, 精确导出的内容, 有固定的导入方式
// export const num1 = 100
// export const name = 'zs'
// export const age = 18

// export function add (a, b) {
//   return a + b
// }
// export const fn = () => {
//   console.log('你好, 我是fn')
// }
// export function tellStory () {
//   console.log('从前有座山')
//   console.log('山里有座庙')
// }


const num1 = 100
const name = 'zs'
const age = 18

function add (a, b) {
  return a + b
}
const fn = () => {
  console.log('你好, 我是fn')
}
function tellStory () {
  console.log('从前有座山')
  console.log('山里有座庙')
}
// 精确导出
export {
  num1,
  name,
  age,
  add,
  fn,
  tellStory
}