/** @format */

//for循环用于遍历数字比较灵活
//for...of用于遍历迭代器(set,map)和数组，字符串等，但是不能遍历普通的object
//for...in用于遍历普通对象上可枚举的属性，包括继承的属性，但是返回的结果不一定是有序的
//只遍历自身的可枚举的属性使用object.hasownproperty
const obj = { name1: "a", age: 18, gender: "man" }
const arr = []
for (let property in obj) {
	if (Object.hasOwnProperty.call(obj, property)) {
		arr.push(property)
	}
}
console.log(arr)

for (var i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i)
	}, 1000)
}
for (let i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i) //01234
	}, 1000)
}
