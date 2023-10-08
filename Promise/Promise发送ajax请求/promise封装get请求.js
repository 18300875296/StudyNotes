sendAjax = url =>{
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.responseText = 'json';
        xhr.open('GET',url);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300){
                    resolve(xhr.response);
                }else{
                    reject(xhr.status);
                }
            }
        }
    })
}
sendAjax('').then(value => {
    console.log(value)
},reason =>{
    console.log(reason)
})