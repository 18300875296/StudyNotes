/** @format
 *
 *
 * 闭包就是在一个函数的内部定义一个函数, 这个内部函数可以访问外部函数的局部变量以及参数,
 * 并且这个函数可以作为返回值,供在外部作用域下使用。
 *
 * 当返回一个闭包时，其实返回的不只有函数,还有外部函数定义的变量以及参数的一个组合,
 * 虽然外部函数执行执行完毕已经弹出执行栈,执行环境也销毁了(定义的变量...也销毁了),
 * 但是由于闭包的存在,使得外部变量没有被回收,内部函数依然可以访问，这延长了变量的生命周期。
 *
 * 闭包的优点:
 * 				实现私有变量,模块化,块级作用域
 * 				使变量的生命周期得以延伸
 * 				实现数据缓存，避免大量重复计算
 *        实现函数编程中的高阶函数和函数柯里化
 *        实现防抖和节流
 * 				实现事件委托
 *
 *
 * 闭包的缺点:内存泄漏，导致无法被垃圾回收
 */
//实现一个闭包
const outerFunction = function () {
	let outerVar = 10
	return function innerFunction() {
		console.log(outerVar)
	}
}
const fn = outerFunction()
fn()

//闭包实现私有变量以及模块化,使得命名空间不被污染，保护变量不被外部所访问

const privateModule = (function () {
	var outerVar = 20
	var outerFunction = function () {
		console.log(++outerVar)
	}
	//定义外部接口
	return {
		privateFun: function () {
			return outerFunction()
		},
	}
})()
privateModule.privateFun() //21
privateModule.privateFun() //22
privateModule.privateFun() //23

//实现块级作用域,使用var在es6之前会输出5555，使用闭包形成一个块级作用域可以打印01234
for (var i = 0; i < 5; i++) {
	;(function (j) {
		setTimeout(() => {
			console.log(j)
		}, 1000)
	})(i)
}

//使用闭包实现数据缓存
function calculate() {
	const cache = {} //缓存的数据

	return function add(a, b) {
		let key = a + ',' + b
		for (let id in cache) {
			if (id === key) {
				console.log('缓存中读取')
				return cache[id]
			}
		}
		//未命中需要计算
		let ans = a + b
		console.log('需要计算')
		cache[key] = ans //将结果放入缓存
		return ans
	}
}
const sum = calculate()
console.log(sum(1, 2))
console.log(sum(1, 2))

//实现高阶函数(map,filter是高阶函数实现),回调函数也是高阶函数
//高阶函数就是函数作为参数传入一个函数，或者函数作为返回值返回
const arr = [1, 2, 3]
console.log(map(arr, x => x * x))
function map(arr, fn) {
	const ans = []
	for (let i = 0; i < arr.length; i++) {
		ans.push(fn(arr[i]))
	}
	return ans
}

//实现函数柯里化，当函数处理多个参数时，转化成一系列每次只处理单个参数的函数，最后返回整个计算结果
//计算100+100
function calculate_every(a) {
	return function fn(b) {
		return a + b
	}
}

const Calculate = calculate_every(100)
console.log(Calculate(100))
//这种情况如果参数有多个 会形成嵌套跟回调地狱类似，可以使用promise解决或者使用递归

//使用闭包进行事务处理
function createTransaction() {
	let transaction = []

	function rollback() {
		console.log('Rolling back transaction...')
		transaction = []
	}

	return {
		addOperation(operation) {
			transaction.push(operation)
		},
		commit() {
			console.log('Committing transaction...')
			transaction.forEach(operation => operation())
			transaction = []
		},
		rollback,
	}
}

const transaction = createTransaction()

transaction.addOperation(() => console.log('Performing operation 1'))

transaction.addOperation(() => {
	console.log('Performing operation 2')
	throw new Error('Operation 2 failed')
})

transaction.addOperation(() => console.log('Performing operation 3'))

transaction.rollback() // 输出 Rolling back transaction...

transaction.addOperation(() => console.log('Performing operation 4'))

transaction.commit() // 输出 Performing operation 1，Performing operation 4
