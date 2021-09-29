// 默认导出 export default
// export default 值  (将这个值, 作为了当前模块的默认导出)

const num = 11
const arr = ['张三', '李四']
const fn = () => {
  console.log('我是fn')
}
const obj = {
  name: 'zs',
  age: 18
}
export default {
  num,
  arr,
  fn,
  obj
}