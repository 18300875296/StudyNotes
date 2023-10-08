/** @format */

//浅拷贝:
//如果属性是基本类型的数据,拷贝的就是基本类型的值,
//如果属性是引用类型的数据，拷贝的就是内存地址,并没有重新创建一个新的引用对象,还是共享一块内存空间
//所以改变拷贝对象中的引用数据值,原对象也会被改变,基本数据类型改变不影响原数据

const obj = { 0: "0", 1: "1", 4: [1, 2], 5: { 1: 1 } }

//使用for...in实现浅拷贝
const obj2 = {}
for (const key in obj) {
	obj2[key] = obj[key]
}

//使用object.assign实现浅拷贝
const obj3 = Object.assign({}, obj)

//使用展开运算符
const obj4 = { ...obj }
obj4["0"] = "1" //只改变obj4
obj2["4"].push(3) //对于引用类型的数据只拷贝地址,改变引用数据原数据也会被改变
obj3["4"] = [2, 2, 2] //为什么原对象没有改变,因为重新创建了一个数组,将数组的地址赋值给"4"，这个新地址与原来的地址不一样,就导致原数对象没有改变
obj4["5"]["1"] = 2
console.log(obj4)
console.log(obj3)
console.log(obj2)
console.log(obj)

//深拷贝:重新创建一个新的对象,地址改变,不再共享内存，
//如果存在循环引用的话,会导致拷贝时进入无限循环导致程序崩溃

//使用Json.parse(Json.stringify()) 先对象转成json字符在将json字符转对象实现深拷贝 不能处理undefined和null symbol
const originalData = { address: [1, 2, 3], name: "John", age: 30, parent: { father: "tom", mother: "duo" } }
const deepClone_data = JSON.parse(JSON.stringify(originalData))
deepClone_data.parent.father = "Bob"
console.log(deepClone_data)
console.log(originalData)

//使用递归实现深拷贝
function deepClone(obj) {
	//如果是null或者不是对象就返回
	if (obj === null || typeof obj !== "object") {
		return obj
	}
	//存在嵌套的数组或者对象
	const target = Array.isArray(obj) ? [] : {}
	//遍历obj中的元素
	for (let key in obj) {
		//使用hasOwnproperty可以避免访问原型链或者内置的属性,确保属性只存在自身
		//使用call将Object.hasOwnProperty绑定到要检查的对象上，避免被其他方法被覆盖,不能正确返回结果
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			target[key] = deepClone(obj[key])
		}
	}
	return target
}

console.log(deepClone(originalData))

//循环引用会导致深拷贝一直循环，导致程序崩溃
const X = {
	a: "A",
}
X["b"] = X

//使用map来记录属性是否已经存在,由于map是强引用，我们可以使用weakMap弱引用 这样可以让其不使用的引用被回收
function _deepClone(obj, weakMap = new WeakMap()) {
	//判断map是否有这个属性
	if (weakMap.get(obj)) {
		return obj
	}
	//是简单数据
	if (obj === null || typeof obj !== "object") {
		return obj
	}
	const target = Array.isArray(obj) ? [] : {}
	weakMap.set(obj, target)
	for (let key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			target[key] = _deepClone(obj[key], weakMap)
		}
	}
	return target
}
console.log(_deepClone(X))

/**
 * 总结
 * 浅拷贝是创建一个新的对象，
 * 对于原对象有一份精确的拷贝，如果拷贝的数据中有简单数据，那就拷贝基本类型的值
 * 如果拷贝的数据中有引用类型的数据，那就拷贝其内存地址，这就会导致新旧对象共用一个堆地址
 * 改变引用类型数据中的值，会导致旧引用也被改变，
 * 如果将引用类型的数据重新赋值，如赋值一个新的数组或者对象，那将会重新创建一个新的地址，将不会改变旧引用，因为地址不一样了
 * 浅拷贝优点就是速度快，对于简单数据类型进行拷贝会更加方便和高效
 *
 * 深拷贝是创建一个新的对象,递归的将原始对象上的属性拷贝到新对象上，而不是引用，这样就保证两个对象没有任何关联
 * 但是 如果对象存在循环引用的情况就会导致递归栈溢出，需要使用map或者weakMap进行记录，如果已经拷贝过就直接返回
 * 优点：不会受到原对象的影响，适合用于引用类型，如对象数组函数等，保证数据的独立和安全性 但是效率低
 */
