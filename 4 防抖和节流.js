/** @format */

//防抖:在同一时间,多次触发同一事件,只执行最后一次触发的事件,避免多次触发造成性能问题
//比如用户快速点击按钮,只触发最后一次,
// 用户在输入框中进行搜索时,当用户停止敲击键盘,才触发事件。用户在提交表单的时候,只触发最后一次
//窗口resize大小变化时,用户停止改变窗口大小时，再进行布局

//防抖是为了减少不必要的计算，以及多次重复操作造成的资源浪费

//防抖原理:函数内部使用一个定时器，一定时间去执行，如果在等待时间内又调用了该函数就清空定时器，如果等待时间没有调用，到时间就执行
const callback = function (a, b) {
	console.log("3秒触发", a + b)
}

const fn = debounce(callback, 3000)
fn(2, 3)
fn(1, 2)
fn(1, 3)
fn(3, 3) //只触发最后一次
function debounce(fn, delay) {
	let timeId
	return function (...arg) {
		clearTimeout(timeId)
		timeId = setTimeout(() => {
			fn.apply(this, arg)
		}, delay)
	}
}
//节流:在同一时间,多次触发同一事件,按一定的频率去触发事件，
//如用户连续滚动页面,按照一定的频率去触发滚动事件
//监听用户的鼠标移动事件,只有在一定的时间内执行鼠标移动的操作,避免频率监听移动鼠标的事件
//节流是为了控制事件执行的频率,平衡响应的时间与资源消耗
function throttle(fn, delay) {
	let timeId
	let lastArgs
	let lastThis
	let isExecute
	return function () {
		lastArgs = arguments
		lastThis = this
		if (!isExecute) {
			isExecute = true
			fn.apply(lastThis, lastArgs)
			timeId = setTimeout(() => {
				isExecute = false
				if (lastArgs) {
					fn.apply(lastArgs, lastThis)
					lastArgs = null
					lastThis = null
				}
			}, delay)
		}
	}
}
