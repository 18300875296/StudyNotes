//封装一个函数minReadFile读取文件内容
//参数 path 文件路径
//返回 promise对象



mineReadFile= (path) =>{
    return new Promise((resolve,reject)=>{
        require("fs").readFile(path,(err,data)=>{
            if(err) return reject(err);
            resolve(data);
        })
    })
}
mineReadFile('./Promise/读取文件夹中的文件/模拟的文本信息.md')
.then((res)=>{
    console.log(res.toString())
},(err)=>{
    console.log(err)
})