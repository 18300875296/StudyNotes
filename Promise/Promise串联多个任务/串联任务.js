let p =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ok');
    },1000)
});
p.then(value=>{
    return new Promise((resolve,reject)=>{
        resolve('okok')
    }).then(value =>{
        console.log(value)//okok
    }).then(value=>{
        console.log(value)//undefined
    })
},reason=>{})