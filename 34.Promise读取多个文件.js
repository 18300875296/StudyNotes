//引入fs模块
const fs = require('fs');
const { resolve } = require('path');
//层级关系 递进排布
/* fs.readFile('读取文件1.md',(err,data1)=>{
    fs.readFile('读取文件2.md',(err,data2)=>{
        fs.readFile('读取文件3.md',(err,data3)=>{
            let result = data1 +'\r\n'+ data2 +'\r\n'+ data3;
            console.log(result);
        });
    });    
}); */
 
//使用Promise 实现
const p = new Promise((resolve,reject)=>{
    fs.readFile('读取文件1.md',(err,data)=>{
        resolve(data);
    });
});
p.then(value=>{
    return new Promise((resolve,reject) => {
        fs.readFile('读取文件2.md',(err,data) => {
            resolve([value,data]);
        });
    })
}).then(value => {
    return new Promise((resolve,reject) => {
        fs.readFile('读取文件3.md',(err,data) => {
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\r\n'));
})