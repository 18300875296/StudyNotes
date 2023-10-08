/**
 * CommonJS
 * 用于服务端,node,webpack
 * }
 *
 * @format
 * @特点 同步/运行时加载,磁盘读取快，通过module.export或者module.exports暴露 通过require()引用
 * Module.exports = { attr1 attr2}
 * exports.attr = xx
 *
 * const xx = require("xx")
 */

/**
 * AMD
 * @特点
 * 不常用,浏览器端的CommonJS,异步加载，速度快，预先加载所有依赖,不管使没有使用会浪费资源
 */
define(["x"], function (x) {
	function foo() {
		return x.fn() + 1
	}
	return {
		foo: foo,
	}
})
//引用
require(["a"], function (a) {
	a.foo()
})
/**
 * CMD
 * @特点
 * 不常用,根据CommonJS和AMD实现,优化了加载方式，异步加载,按需加载,速度和性能差
 */
define(function () {
	function foo() {
		var x = require("x")
		return x.fn() + 1
	}
	return { foo: foo }
})
//引用
var x = require("a")
a.foo()

/**
 * ES module
 * @特点
 * 目前浏览器默认标准,静态编译,在编译时确定依赖关系,以及输入和输出变量
 *
 * export
 * 用于从模块中导出实时绑定的函数，对象等,便于在其他模块中使用import导入
 *
 * @导出方式
 *  命名导出(每个模块包含任意数量),需要使用相应对象的相同名称
 *  默认导出(一个模块只能包含一个),默认导出可以使用任意名称
 *
 * @format
 */

//导出单个例子
export let name = "123"
export function functionName() {}
export class ClassName {}
//导出列表
export { name, name2 }
// 重命名导出
export { variable as name2, variable2 as name3 }

//默认导出(可以使用任意名称导入)
// test.js导出
let a = 12
export default a = 12
//文件二导入
import b from "./test.js"
console.log(b) //输出12

/**
 * @注意
 * 在html中需要使用 type = "module"的<script>标签才能识别模块
 *  只能在模块内部使用import和export,不是普通脚本文件
 * 不能通过file://url 运行js模块,会导致cors错误,通过http服务器运行
 */
;<script type="module" src="main.js"></script> //应用到html

/**
 * 动态加载模块(import)
 * 需要时才会去加载模块,import()调用后返回一个promise
 */
import { square } from "./modules/main.js"

//获取每个按钮
let squareBtn = document.querySelector(".square")
//点击按钮动态加载并绘制形状
squareBtn.addEventListener("click", () => {
	import("/js-examples/modules/dynamic-module-imports/modules/square.js").then(Module => {
		let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue")
		square1.draw()
		square1.reportArea()
		square1.reportPerimeter()
	})
})
