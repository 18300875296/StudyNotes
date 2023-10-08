/** @format */

//在js中每个对象都有一个原型对象(xxx.prototype)原型对象存放一些共享的方法和属性
//所有的对象都有一个默认的原型对象(Object.prototype),原型对象上有一些tostring,valueof的方法
// 创建一个构造函数
function Animal() {}
//实例化构造函数
const animal = new Animal()
//访问Animal的原型对象
console.log(Animal.prototype) //里面有一个constructor属性和一个__proto__属性
//constructor属性指向这个构造函数
console.log(Animal.prototype.constructor) //[Function: Animal]
//_proto_属性指向默认的object原型对象
console.log(Animal.prototype.__proto__) //[Object: null prototype] {}
//实例对象animal可以通过constructor访问构造函数
console.log(animal.constructor) //[Function: Animal]
//实例对象animal可以通过__proto__访问Animal的原型对象
console.log(animal.__proto__ === Animal.prototype) //true

//总结:原型对象:每个对象都有一个原型对象,原型对象上有两个属性：constructor和__proto__
//constructor属性指向构造函数
//__proto__属性指向内置的Object原型对象(Object.prototype),而Object.prototype也有constructor 和 __proto__
//Object.prototype.constructor指向Object的构造函数,
//Object.constructor指向构造函数Function
//Object.prototype.__proto__指向null尽头

//而所有的构造函数都是函数对象,也有constructor 和 __proto__ 指向的是内置的Function原型对象
//Animal.constructor指向Function构造函数,Object.constructor指向Function构造函数
//Animal.__proto__指向Function.prototype ,Object.__proto__指向Function.prototype

//实例对象animal通过constructor属性可以访问构造函数Animal
//实例对象animal通过__proto__ 属性访问构造函数Animal的原型对象Animal.prototype

const A = {
	name: "tom",
	sayHello: function () {
		console.log("sayHello")
	},
}
const B = {
	age: 18,
	sayBye: function () {
		console.log("sayBye")
	},
}
const C = {
	gender: "man",
	sayGoodnight: function () {
		console.log("sayGoodnight")
	},
}
A.prototype = B
B.prototype = C

//显式设置一个对象为另一个对象的原型
const a = { name: "tome", age: 18, gender: "man" }
const b = { age: 20, phone: "18300875296", role: "web前端" }
Object.setPrototypeOf(a, b) //将b设置为a的原型
console.log(a.__proto__) //{ age: 20, phone: '18300875296', role: 'web前端' }

//还可以使用Object.create()创建原型
const c = { name: "bob" }
Object.setPrototypeOf(c, a)
console.log(Object.create(c).__proto__.__proto__)

//实现创建一个对象Object,我们使用user代替Object
function User(key, value) {
	this.key = key
	this.value = value
}
	//连接原型
User.prototype = Object.create(Object.prototype)
const user = new User("name", "bob")

//原型链是一条由原型对象组成的链，每一个原型对象都有一个指针指向父对象的原型对象最后指向null
//当查找属性或者方法时，通过单链表去访问，直到表尾结束

//使用__proto__和getPrototypeOf可以访问原型对象，但是前者是一个非标准的后者是标准的

//实现new关键字 在new的时候，首先会创建一个空对象实例，然后将这个空对象实例和构造函数进行连接，并调用构造函数初始化
function NEW(constructor,...args){
	// 创建实例
	const instance = {}
	// 链接实例和构造函数
	instance.prototype = Object.create(constructor.prototype)
	// 初始化
	constructor.call(instance,...args) 
	return instance
}
function Person(firstname,lastname){
	this.firstname = firstname
	this.lastname = lastname
}
const person = NEW(Person,'z','xw') 
// instanceof 的原理是判断一个实例是否在它的原型链上 所以instanceof是通过原型链进行查找的
class Animal{
	constructor(name){
		this.name = name
	}
	say:()=>{
		console.log('animal say')
	}
}
const dog = new Animal('dog')
 function myInstanceof(instance,constructor){
	if(!instance || !constructor) return 
	// 判断实例的原型是否指向构造函数
	let prototype = constructor.prototype
	while(instance !== null){
		if(Object.getPrototypeOf(instance) === prototype){
			return true
		}
		instance = Object.getPrototypeOf(instance)
	}
	return false
 }
 myInstanceof(dog,Animal)
 () => { 
	function Container(value) { 
		this.value = value; 
	}; 
	function Box(value) { 
		this.value = value; 
	}; 
	const b = new Box(1);
	 return checkIfInstanceOf(b, Container); }
