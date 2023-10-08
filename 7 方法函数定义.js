/**
 * get将对象属性绑定到查询该属性时被调用的函数
 *
 * @format
 */

const obj = {
	log: [1, 2, 3],
	get latest() {
		return this.log[this.log.length - 1]
	},
}
console.log(obj.latest) // 3
/**
 * @注意
 * 使用get时必须不带参数、get不能同时出现在一个对象字面量中
 *使用delete删除getter
 */
delete obj.latest
console.log(obj.latest) //undefined

/**
 * 当尝试设置属性,set语法将对象属性绑定到要调用的函数上
 */
const language = {
	log: [],
	set cur(name) {
		this.log.push(name)
	},
}
//使用set必须有参数
language.cur = "Chinese"
console.log(language.log)
//使用delete 删除set
delete language.cur

//可以使用object.defineProperty()来定义getter,setter
