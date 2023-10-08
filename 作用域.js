/** @format */

//作用域在编译阶段就通过词法作用域确定

//js作用域分为全局作用域和局部作用域和词法作用域还有块级作用域

//全局作用域是指整个代码在什么地方都能访问到全局下的变量和函数

var a = 1 //全局作用域下的变量
function Fn() {
	console.log(a)
}
Fn() //1

//局部作用域是指变量和函数只能在定义的代码块中进行访问,常存在于函数体中{},外部变量无法访问函数体中的局部变量, 函数是唯一会创建局部作用域的结构
//局部作用域包含函数作用域和块级作用域

function Fn2() {
	var b = 1 //局部作用域下的变量
	console.log(b)
}
Fn2() //1
//console.log(b) //未定义

//词法作用域 是指通过代码定义的位置来确定这个变量或者函数的作用域，词法作用域是用来确定是属于全局作用域还是局部作用域

//词法作用域会将会将变量和函数声明进行处理,分配到最近的作用域中

//函数作用域：函数中定义的变量或者函数只能在函数体内访问,内部使用var或者函数声明的函数存在提升
function Fn3() {
	console.log(c) //undefined
	fn3() //提升
	if (true) {
		//如果在代码块内声明var变量，该变量也会成为外部作用域的变量
		var c = 2
	}
	console.log(c) //2
	function fn3() {
		console.log("提升")
	}
}
Fn3()

//=================>>>函数内部也存在变量提升等效于下面的代码

// function Fn3() {
// 	var c
// 	console.log(c) //undefined
// function fn3() {
// 		return console.log("提升")
// 	}
// 	if (true) {
// 		c = 2
// 	}
// 	console.log(c) //2
// }
// Fn3()

//所以使用var会出现变量提升，会引出一些意想不到的问题针对var 在es6提升块级作用域 引入了let const

//块级作用域：变量或者函数只能在定义的代码块内访问,不存在变量提升,避免污染全局命名空间
//es6引入let const 关键字来声明块级作用域
function Fn4() {
	if (true) {
		let d = 1
	}
	console.log(d) //报错
}
// 在es6 之前使用IIFE立即执行函数模拟块级作用域,创建私有变量，避免污染全局 原理是使用闭包
var counter = (function () {
	var count = 0
	return function fn() {
		return ++count
	}
})()
console.log(counter()) //1 只有内部可以访问,外部是不可访问的
console.log(counter()) //2

//IIFE立即执行函数表达式 转化过程
//1.使用函数声明创建一个函数
function name(name) {
	console.log(name)
}
//将函数声明变成函数表达式
var name = function (name) {
	console.log(name)
}
//立即调用name()
;(function (name) {
	console.log(name)
})("tom")

//第二种形式(name())
;(function (name) {
	console.log(name)
})("bob")
