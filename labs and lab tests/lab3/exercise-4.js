
//<-----------------------  exercise 4 ------------------------->


delayedPromisse = function(value){
    
    return new Promise(function(resolve,reject){
        setTimeout(resolve,2000,value*value);
    })

}

delayedPromisse(5).then(function(result){
    console.log(result)
})

async function asyncPromise(value){
    try{
        return await new Promise(function(resolve,reject){
            setTimeout(resolve,2000,value*value);
        })
    }catch(error){
        
    }
}

asyncPromise(6).then(function(value){
    console.log(value);
})