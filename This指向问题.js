/** @format */

function baz() {
	console.log("baz", this == globalThis) //全局this
	bar()
}
function bar() {
	console.log("bar", this == globalThis) //baz
	bax()
}
function bax() {
	console.log("bax")
}
baz()
