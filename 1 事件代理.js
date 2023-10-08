/**
 * --------------事件代理----------------------------------
 *
 * @ 定义:也称事件委托用于绑定事件,将需要绑定给子元素的事件绑定到父元素身上， 让父元素进行监听
 *
 * @ 原理: 通过DOM元素的事件冒泡将绑定在里层的事件传导到外层
 *
 * @ 事件触发后会在父子元素之间进行传递会有三个阶段 1 window-->事件元素本身节点(捕获阶段), 2 在目标元素触发时(目标阶段) 3 元素本身--->window(冒泡阶段)
 *
 * @ 优点: 可以大量节省内存占用,减少事件注册,还可以动态绑定事件
 *
 * @ 例子:在ul身上为所有的li绑定事件,执行的时候再去匹配是那个孩子结点。当节点需要通过请求发送,每次都会有用户操作增加或者减少li 就需要事件绑定到父亲节点上实现事件代理
 *
 * @ 注意:并不是把事件委托到最顶层更好,因为里层向外层传递需要时间，祖先链越长需要的时间越多,性能越差
 *
 * @format
 */

/**
 *
 * ---------事件处理---------------------------
 */
addEventListener(type, listener, options)
/**
 * 将指定的监听器注册到元素上,该元素被触发时,指定的回调函数会触发
 * options : capture/once/passive(永远不调用) = true | false
 */
removeEventListener(type, listener, options)
/**
 * 将监听器从元素上移除,如果注册了capture = true and capture = false 需要分别移除
 * options : 只有capture
 */
myElement.addEventListener("click", functionA)
myElement.addEventListener("click", functionB)
// 当元素被点击时两个函数都会工作,不会被覆盖
/**
 *------事件对象--------------------------
 *在事件处理函数内部有一个参数,event/e,被称为事件对象
 * e.target 指刚刚发生事件的元素
 */

FormData.onsubmit = function (e) {
	if (fname.value === "" || lname.value === "") {
		e.preventDefault()
	}
}
//阻止默认行为(e.preventDefault()),如上面用户提交表单，但是提交信息错误，阻止默认提交行为,不能阻止冒泡蔓延

//阻止冒泡事件的传播(e.stopPropagation()),只能阻止传播,不能阻止默认行为

//return false 可以同时阻止冒泡和阻止默认行为
