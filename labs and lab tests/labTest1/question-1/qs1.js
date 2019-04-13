
const mixedArray = ["Matrix",1,true,2,false,3];



var makeUpperCase =  function(numberArr){
    var numbersArray =[];
    if( numberArr.length > 1){
        for(var i =0; i <numberArr.length ; i++){
            if(typeof numberArr[i] == "number"){
                numbersArray.push(numberArr[i]*5);
            }
        }
        return Promise.resolve(numbersArray);
    }else{
        var error  = new Error("Error: Array cannot be empty");
        return Promise.reject(error);
    }
    

}

makeUpperCase(mixedArray)
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error.message);
})

