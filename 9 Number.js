/** @format */

console.log(Number(undefined)) //NaN
console.log(Number(null)) //0
console.log(Number.parseFloat("1.22")) //1.22
console.log(Number.parseInt(1.22)) //1
//当用new 调用Number时 此时会创建Number对象 对象不是一个原始值
Number.MAX_VALUE //最大正数
Number.MIN_VALUE //最小正数接近0
console.log(0.1 + 0.2 != 0.3) //0.1 0.2转化为二进制会无限循环,多余位数会截掉 出现精度损失

/**
 * BigInt 表示大于2^53 -1 的整数表示任意大的数
 * 用n在整数后面定义10n 或者 BigInt(传递一个整数)不使用new构造
 * 使用BigInt带小数的会被取整
 * 0n == 0 T 0n === 0 F
 */
typeof 1n === "bigint" //true
typeof BigInt("1") === "bigint" //true
//使用object包装后认为是一个普通的object
typeof Object(1n) === "object" //true
