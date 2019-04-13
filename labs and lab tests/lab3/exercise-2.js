
const arrayOfNames = ["ajjax","tyni","clay"];
const mixedArray = ["anarchy",99,true];



var makeUpperCase =  function(wordArray){
    var toUpperArray =[];
    for(var i =0; i <wordArray.length ; i++){
        if(typeof wordArray[i] == "string"){
            var s =  wordArray[i].toUpperCase();
            toUpperArray.push(s);
        }else{
            var error  = new Error("Error: not all items in the array are strings");
            return Promise.reject(error);
        }
        
    }
    return Promise.resolve(toUpperArray);

}

var sortWords = function(sortArray){
    var sortedArray =[];
    sortedArray = sortArray.sort();

    return Promise.resolve(sortedArray);
}


makeUpperCase(arrayOfNames)
.then(sortWords) // chain
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error.message);
})

