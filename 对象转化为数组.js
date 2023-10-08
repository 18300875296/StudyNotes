/** @format */

const obj = { a: 1, b: 2, c: 3 }
const keys = Object.keys(obj)
const values = Object.values(obj)
console.log(keys, values) //[ 'a', 'b', 'c' ] [ 1, 2, 3 ]
const newObj = Object.entries(obj) //en chui s
console.log(newObj)
