/**
 * 全局的setTimeout()设置一个定时器,期限到后执行一个函数
 * setTimeout(fn,[,delay,arg1,arg2...])
 * fn执行的函数,delay毫秒数,传入函数fn的参数
 * 返回值 timeoutID,表示定时器编号,传递给clearTimeout()取消定时器
 *
 * setInterval()设置一个时间间隔,重复调用代码片段
 * setInterval(fn,[delay,arg1,arg2...])
 * 返回值intervalID,唯一标识时间间隔,通过clearInterval() 移除定时器
 *
 * @format
 */

//使用window.postMessage()可以实现0ms延时
