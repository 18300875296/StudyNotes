/** @format */

//Es6引入的新的基本数据类型，属于原始数据类型，用于确定对象属性的唯一不可变，是独一无二的
const symbol1 = Symbol("test")
const symbol2 = Symbol("test")
console.log(symbol1 === symbol2) //false 即使两个symbol的描述字符串相同 它们也是唯一的
//symbol类型的值不能被for...in所遍历 所以基于for...in的方法都不能使用如(object.keys())
//可以被object.getOwnPropertySymbols访问
const key1 = Symbol("key1")
const key2 = Symbol("key2")
const obj = {}
obj[key1] = "value1"
obj[key2] = "value2"

console.log(obj)
//console.log(Object.keys(obj)) //报错
console.log(Object.getOwnPropertySymbols(obj)) //返回symbol数组
