/**
 * Object.defineProperty()
 * 直接在对象上定义一个新属性，或者修改属性
 * 设置configurable = false 该属性不可以被删除
 * 设置enumerable=true才会在对象的枚举属性中
 * writable=true才能被赋值改变
 * @format
 *  */

import { name } from "./3 模块化方案"

//使用Object.prototype.toString判断数据类型
// const getType = obj => {
// 	let type = typeof obj
// 	if (type !== "object") return type //判断简单数据类型
// 	return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, "$1")
// }
// console.log(1)

// setTimeout(() => {
// 	console.log(2)
// }, 0)

// new Promise((resolve, reject) => {
// 	console.log("new Promise")
// 	resolve()
// }).then(() => {
// 	console.log("then")
// })

// console.log(3)

const obj = {}
let name = null
Object.defineProperty(obj,'name',{
  get(){
    console.log(`读取name:${name}`)
    return name
  },
  set(newVal){
    if(newVal !== name){
      name = newVal
      console.log(`设置name:${name}`)
    }
  }
})
obj.name
obj.name = '2'