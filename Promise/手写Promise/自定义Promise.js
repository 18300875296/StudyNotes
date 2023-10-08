function Promise(executor){
    //添加两个属性状态和结果
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //设置回调函数
    this.callbacks = [];
    //保存实例对象的this
    const _this = this;
    //resolve函数
    function resolve(data){
        if(_this.PromiseState !== 'pending') return
        //修改对象的状态
        _this.PromiseState = 'resolved';
        _this.PromiseResult = data;
        //由于then中的回调resolve拿不到 所以把回调函数存在callback中
       //执行回调是异步的
       setTimeout(()=>{
        _this.callbacks.forEach((item)=>{
            item.onResolved(data);
             
         })
         
       })
        
    }
    //reject函数
    function reject(data){
        if(_this.PromiseState !== 'pending') return
        _this.PromiseState = 'rejected';
        _this.PromiseResult = data;
        setTimeout(()=>{
            _this.callbacks.forEach((item)=>{
                item.onRejected(data);
             })
        })
       
    }

    try {
        executor(resolve,reject);
    } catch (e) {
        //捕获错误 调用reject 改变状态和值
        reject(e)
    }
    
}
//在原型上添加then方法
Promise.prototype.then = function(onResolved,onRejected){
    const _this = this;
    //判断回调函数的参数
    if(typeof onRejected !== 'function'){
        onRejected = reason =>{
            throw reason;
        }
    }
    if(typeof onResolved !== 'function'){
        onResolved = value => value;
    }
    return new Promise((resolve,reject)=>{
        //封装函数
        function callback(type){
            try {
                let result = type(_this.PromiseResult);
                if(result instanceof Promise){
                    result.then(v=>{
                        resolve(v)
                    },r=>{
                        reject(r)
                    })
                }
            } catch (e) {
                reject(e)
            }
           
        }
        if(this.PromiseState === 'resolved'){
            //then中的回调是异步的
            setTimeout(()=>{
                callback(onResolved)
            })
        }
        if(this.PromiseState === 'rejected'){
            setTimeout(()=>{
                callback(onRejected)
            })
        }
        //判断状态是否为pending
        if(this.PromiseState === 'pending'){
            //保存回调函数
            this.callbacks.push({
                onResolved:function(){
                    //执行成功的回调函数
                   callback(onResolved)
                },
                onRejected:function(){
                    callback(onRejected);
                }
            })
        }
    
    
       
    }) 
}  
//添加catch方法
Promise.prototype.catch = function(onRejected){
    return this.then(undefined,onRejected)
}
//添加resolve方法
Promise.resolve = function(value){
    //返回promise对象
    return new Promise((resolve,reject)=>{
        if(value instanceof Promise){
            value.then(v=>{
                resolve(v);
            },r=>{
                reject(r)
            })
        }else{
            //设置状态为成功
            resolve(value)
        }
    })
}
//添加reject方法
Promise.reject = function(value){
    //返回promise对象
    return new Promise((resolve,reject)=>{
            //修改状态为失败
            reject(value)
        
    })
}
//添加all方法
Promise.all = function(promises){
    //返回promise对象
    return new Promise((resolve,reject)=>{
        let count = 0;//计数变量
        let result = []//成功的结果
        //遍历
        for(let i = 0;i<promises.length;i++){
            promises[i].then(v=>{
                //执行这里说明状态为成功
                count++
                result[i] =v;
                //每个promise都为成功才执行
                if(count === promises.length){
                    resolve(result);
                }
            },r=>{
                reject(r)
            })
        }
    })
}
//添加race方法
Promise.race = function(promises){
    //返回promise对象
    return new Promise((resolve,reject)=>{
        //遍历
        for(let i = 0;i<promises.length;i++){
            promises[i].then(v=>{
                //修改返回第一个对象的状态为成功
                result(v);
            },r=>{
                //修改返回第一个对象的状态为失败
                reject(r)
            })
        }
    })
}


