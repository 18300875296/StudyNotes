/** @format */
//js中的函数有两种定义方式:函数声明和函数表达式

;(function () {
	//函数声明:function 函数名(){}也称命名函数
	function Fn() {}
	//函数表达式:变量名 = function(){}，使用函数表达式定义的函数也称匿名函数,因为省略了function
	const Fn2 = function () {}
})()
/**区别
 *
 *两者都是用于定义函数的，但是函数声明会出现函数提升现象(即提升到作用域的最顶层)，所以在函数声明前后都可以进行访问
 *而函数表达式不存在函数提升,在之前访问会报错
 *函数提升以及变量提升与js作用域有关(词法作用域:变量定义时所在的位置来分配是为全局还是局部的作用域)
 */
console.log(Fn(2, 3))
function Fn(x, y) {
	return x + y
}

//console.log(Fn2(2, 3)) //不能再定义之前访问
const Fn2 = function (x, y) {
	return x + y
}
console.log(Fn2(2, 3))
//立即执行函数表达式IIFE 用于变量私有化 防止全局命名空间被污染 闭包原理(内部函数变量可以访问外部函数的变量)
;(function (parm1, parm2) {
	var a = parm1
	var b = parm2
	var c = 0
	++c
	console.log(a, b, c)
})(1, 2) //1,2,1

//  实现一个IIFE
//先创建一个函数声明
function B() {
	var a = 1
}
//函数声明转函数表达式
var B = function () {
	var a = 1
}
//立即调用函数表达式
B()

//进行一下改造就形成了IIFE
;(function () {
	var a = 1
})()

//箭头函数：用于简化函数，使用一个=> 箭头函数不能使用函数声明定义,箭头函数是匿名的
var functionName = () => {}
//箭头函数是es6引入的， 箭头函数没有自己的this指向，函数中的this指向定义时就确定好的this,而普通函数中的this是动态确定的
//箭头函数中没有argument参数,可以使用...rest访问参数,因为箭头函数没有argument参数只能继承父类作用域中argument， 这会导致argument参数不一致,
var functionName = (...rest) => {}
//箭头函数不能用于构造函数，因为构造函数中需要this指向实例，箭头函数没有this，不能通过new创建实例,那也就没有prototype原型了
//当只有一句代码时可以不使用return
//在箭头函数中使用call不能改变其this在定义的时候就已经确定了

//构造函数
//
//高阶函数属于函数编程的概念，回调函数属于高阶函数的参数，函数接收一个函数作为参数，并在合适的时间调用这个函数，将这个参数函数称为回调函数
//高阶函数 接收一个函数作为参数的函数,以一个函数作为返回值的函数
function Person(name) {
	if (this instanceof Person) {
		console.log("调用new")
	} else {
		console.log("普通调用")
	}
}
const person = new Person("tom")
const res = Person("bob")
console.log(person)
console.log(res)
