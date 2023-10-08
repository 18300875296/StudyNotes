let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ok');
        //reject('error')
    },1000)
});
p.then(value =>{
    console.log(1,value)
    return new Promise((resolve,reject)=>{
        //resolve('okok')
        reject('errorerror')
    })
}).then(value =>{
    //throw 'sorry'
   
    console.log(2,value);
}).then(value =>{
    //throw'sorrysorry'

    console.log(3,value);
    
}).catch(reason=>{
    console.warn(reason)
})
