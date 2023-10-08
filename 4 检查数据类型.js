/** @format */

console.log(typeof 42) //number
console.log(typeof "ab") //string
console.log(typeof function () {}) //function
console.log(typeof false) //boolean
console.log(typeof {}) //object
console.log(typeof new Array(1)) //object
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof NaN) //number
const aa = new Date()
console.log(typeof aa) //object
//typeof适用于判断原始简单数据类型,对于复杂数据类型判断会出现一些问题如判断null,array,function

console.log(42 instanceof Number) //false
console.log("ab" instanceof String) //false
console.log({} instanceof Object) //true
console.log([] instanceof Array) //true
console.log(false instanceof Boolean) //false
console.log(null instanceof Object) //false
console.log(undefined instanceof Object) //false
//instanceof判断一个对象是否属于某个类型的实例,只能检查复杂的数据类型,对于简单数据类型不能检查

//使用object.prototype.toString.call()可以判断所有的情况
//为什么可以使用tostring判断,因为js中数据类型自身都有一个tostring内置函数
let x = 42
console.log(Object.prototype.toString.call(x)) //[object Number]
let y = "ab"
console.log(Object.prototype.toString.call(y)) //[object String]
let z = false
console.log(Object.prototype.toString.call(z)) //[object Boolean]
let a = null
console.log(Object.prototype.toString.call(a)) //[object Null]
let b = undefined
console.log(Object.prototype.toString.call(b)) //[object Undefined]
let c = {}
console.log(Object.prototype.toString.call(c)) //[object Object]
let d = []
console.log(Object.prototype.toString.call(d)) //[object Array]
let e = function () {}
console.log(Object.prototype.toString.call(e)) //[object Function]
class Car {}
console.log(Object.prototype.toString.call(Car)) //[object Function]
let f = new Date()
console.log(Object.prototype.toString.call(f)) //[object Date]
let g = new RegExp()
console.log(Object.prototype.toString.call(g)) //[object RegExp]
//为什么需要使用call --需要保证每次调用时this都指向要进行判断的对象

console.log(Array.isArray([1, 2, 3])) //判断数组类型

//每个对象都有一个constructor属性 这个属性指向对象的构造函数,我们可以通过constructor属性可以确定对象指向那个构造函数
const array = new Array(2)
console.log(array.constructor === Array) //true
class Person {
	constructor(name) {
		this.name = name
	}
}
const car = new Person("BWM")
console.log(car.constructor === Person) //true//[class Person]
//使用constructor也可以判断数据类型,需要原型链不能改变
//如果原型链改变则将出现错误
function Animal() {}
let dog = new Animal()
console.log(dog.constructor === Animal) //true
//constructor属性是通过原型链来查找的,dog-->Animal.prototype-->object.prototype-->null
//animal.prototype这个原型对象指向的是这个Animal这个构造函数,object.prototype指向object
//那么我们改变animal.prototype的指向就会改变constructor指向,也就会造成数据类型判断错误
console.log(Animal.prototype)
Animal.prototype = {}
console.log(dog.constructor === Animal)
