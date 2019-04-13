const delayedPromise = (num) => {
    const pro = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(num * num);
        }, 1000)
    })
    return pro;
}

const delayedPromise2 = (num) => {
    
    return delayedPromise(num);
}

const retunPromises = function(){
    const allPromises =  new Promise(function (resolve,reject){
        return Promise.all([delayedPromise(6),delayedPromise2(7)])
        .then(function(values){
            console.log(values);
        })
    })
}

retunPromises();



