/**
 * OOP面向对象编程
 * 将数据和函数调用的方法封装到一个对象中,通过使用继承,实现代码的复用以及扩展
 *优点:提高代码的可复用性,可扩展性以及多态性,继承性,模块性,封装性
 *缺点:代码的可读性较低，复杂度较高，对开发人员的技术有一定的要求,由于类中的继承关系会导致一个类中会有很多依赖，导致重构困难
 * @format
 */
//将类car和tesla的属性和方法封装在class中，外部不能访问,提高了代码的安全性
class Car {
	//创建new 关键字时自动调用构造函数,用于初始化和接收传入的参数
	constructor(brand, model, year) {
		this.brand = brand
		this.model = model
		this.year = year
	}
	//获取车龄
	getAge() {
		return new Date().getFullYear() - this.year
	}
	run() {
		console.log(`${this.model} of ${this.brand} is running`)
	}
}
//创造一个子类 继承父类Car的方法和属性----继承性
class electricCar extends Car {
	constructor(brand, model, year, batterCapacity) {
		// super关键字可以访问父类的构造函数,静态方法以及普通方法super.方法名---super.getAge()
		super(brand, model, year)
		// 注意this必须放在super关键字之后
		//这是因为super()将负责调用父类的构造函数进行初始化,并将this设置指向子类的实例,这样父类中的属性和方法将被正确的继承到子类实例上
		//将this关键字放到super后面才能保证子类实例属性能正确的继承父类属性
		this.batterCapacity = batterCapacity
	}
	//充电
	charged() {
		console.log(`the ${this.model} of ${this.brand} is charging`)
	}
	// 父类方法的重写--多态性
	//多态性:不同的对象对同一个接口表现出不同的行为,就像动物园中有一个动物类,每个动物都有叫声,但每个动物的叫声都不同
	//多态性有两种形式: 一种是方法名的覆盖(重写),一种是方法的参数改变(重载)
	run() {
		console.log(`${this.model} of ${this.brand} is silently`)
	}
}
class GasolineCar extends Car {
	constructor(brand, model, year, fuelCapacity) {
		super(brand, model, year)
		this.fuelCapacity = fuelCapacity
	}
	//加油
	refueled() {
		console.log(`The ${this.model} of ${this.brand} is refueling`)
	}
	run() {
		console.log(`${this.model} of ${this.brand} is loudly`)
	}
}
const Tesla = new electricCar("Tesla", "S", 2022, 100)
Tesla.charged()
Tesla.run()
console.log(Tesla.getAge())
const BWM = new GasolineCar("BWM", "M4", 2021, 80)
BWM.refueled()
BWM.run()
console.log(BWM.getAge())

//这是es6 class实现OOP编程 es5 之前使用原型链来实现OOP

/**
 * PP过程式编程
 * 将一个程序的流程分成多个步骤,代码是按步骤来写的,每个步骤依次调用函数,是一系列的函数调用形成的编程模式
 *优点: 简单易于理解和维护,由于是一系列函数调用形成的 通常比OOP模式执行更快
 *缺点:代码的复用性 可扩展性较低
 * @format
 */

//计算数组平均值---PP编程
function calculateAverage(nums) {
	let ans = 0
	const n = nums.length
	for (let i = 0; i < n; i++) {
		ans += nums[i]
	}
	return ans / n
}
const nums = [1, 2, 3, 4, 5]
console.log(calculateAverage(nums))

/**
 * FP函数编程
 * 函数编程被设计成无状态,即只依赖于传入的参数，不依赖于外部的变量等状态，这样就可以避免状态改变所引起的数据的改变,
 * 就像数组中的map就是函数编程,返回的是一个新的数组
 *  函数编程就是将程序视为数学中函数的组合,避免了可变的数据和状态,通过对函数进行组合和变换、抽象来实现计算
 * 优点: 可维护性高、代码简洁、
 *  可扩展性高,因为函数式编程是由一系列的函数组成,每个函数都是独立的 可复用的所以可扩展性高
 * 缺点:由于被抽象化，需要一定的数学和计算机的基础,当处理大量数据会一定的性能问题
 *
 * 适用场景: 适用于数值计算,因为函数式编程不存在可变数据和状态,可以说是纯数学函数,方便进行数值计算
 * 也适用于并发编程 因为并发编程中问题总是出在共享状态和可变数据,使用函数式编程可以避免这些
 * 对数据进行处理 可以使用函数式编程中的高阶函数来实现如筛选 映射 聚合(filter,map.reduce....)
 * @format
 */
//函数编程中的高阶函数有两种:一种是参数作为函数(map.filter,reduce)的函数，一种是函数作为结果返回值的函数(实现函数柯里化,惰性求值)

//接受一个函数作为参数
//使用map进行映射
function map(nums, fn) {
	const ans = []
	for (let i = 0; i < nums.length; i++) {
		ans.push(fn(nums[i]))
	}
	return ans
}
const array = [1, 2, 3, 4, 5]
console.log(map(array, x => x * x))
//使用filter进行筛选
function filter(nums, fn) {
	const ans = []
	for (let i = 0; i < nums.length; i++) {
		if (fn(nums[i])) {
			ans.push(nums[i])
		}
	}
	return ans
}
const num = [2, 3, 4, 5, 6, 7]
console.log(filter(num, x => x - 5 >= 0))

//函数作为结果返回的函数
//实现函数柯里化:函数柯里化属于函数编程中的一个概念,传入函数的多个参数变成，变成一系列只接收单个参数的函数，最后将所有值返回
//函数柯里化可以简化函数的调用形式，使得函数编程变得更加灵活，每次将处理一个参数，然后返回一个新的函数处理剩余参数
function partial(fn, ...args) {
	return function restFn(...moreArgs) {
		return fn(...args, ...moreArgs)
	}
}
function add(a, b) {
	return a + b
}
const result = partial(add, 2)
result(3)
console.log(result(4))

//异步编程
//由于js是单线程,就导致在处理一些网络请求，读写文件，定时器时，如果采用同步代码来进行编写会导致主线程阻塞，所以为了解决主线程被阻塞,在处理网络请求时的同时，去执行其他的同步任务,提出了异步编程
//异步编程的提高了程序处理任务的效率,以及程序的响应速度
//缺点就是使用回调函数、以及promise async/await 增加了代码的复杂度
