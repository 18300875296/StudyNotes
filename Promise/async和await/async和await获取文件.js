const fs = require('fs');
const util = require('util');
//将api转化为promise形式
const mineReadFile = util.promisify(fs.readFile)

//使用回调函数实现
// fs.readFile('./Promise/async和await/模拟文件1.html',(err,data1)=>{
//     if(err) throw err;
//     fs.readFile('./Promise/async和await/模拟文件2.html',(err,data2)=>{
//         if(err) throw err;
//         fs.readFile('./Promise/async和await/模拟文件3.html',(err,data3)=>{
//             if(err) throw err;
//             console.log(data1+data2+data3);
//         })    
//     })
// })
//使用async和await实现
async function main(){
    //如果出错只需要使用try...catch包裹就能捕获
    try {
        let data1 = await mineReadFile('./Promise/async和await/模拟文件1.html');
        let data2 = await mineReadFile('./Promise/async和await/模拟文件2.html');
        let data3 = await mineReadFile('./Promise/async和await/模拟文件3.html');
        console.log(data1 + data2 +data3)
    } catch (e) {
        console.log(e)
    }
}
main();