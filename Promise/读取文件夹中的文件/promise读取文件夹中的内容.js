const fs = require('fs');

//旧--回调函数的形式
fs.readFile('./Promise/读取文件夹中的文件/模拟的文本信息.md',(err,data)=>{
    if(err) throw err;//有错误 抛出错误
    console.log(data.toString());//输出文本内容
})

//Promise
const p = new Promise((resolve,reject)=>{
    //fs异步任务
    fs.readFile('./Promise/读取文件夹中的文件/模拟的文本信息.md',(err,data)=>{
        if(err){
            reject(err);
        }else{
            resolve(data)
        }
    })  
})
//调用then
p.then((value)=>{
    console.log(value.toString())
},(reason)=>{
    throw reason;
})