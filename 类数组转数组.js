/** @format */

function fn(a, b, c) {
	console.log([...arguments]) //使用展开运算符
	console.log(Array.from(arguments)) //使用Array.from()
	console.log(Array.prototype.slice.call(arguments))
	console.log(Array.prototype.concat.apply([], arguments))
	//为什么可以使用slice和concat转化，因为这两个方法底层是类似for..in实现的所以可以遍历类数组
}
fn(1, 2, 3)
