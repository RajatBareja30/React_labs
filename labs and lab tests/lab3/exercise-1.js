//<-----------------------  exercise 1 ------------------------->
// create promisse
var checkNumber  = function (number){
    return  new Promise(
      function(resolve,reject){
  
          if(number > 10){
              var result =number+ " is greater than 10, success!";
              resolve(result);
          }else{
              var result = new Error(number + " is less than 10, error");
              reject(result);
          }
  
      }
    )
  
  }
  
  //call promisse
  checkNumber(11)
  .then(function(result){
      console.log(result);
  })
  .catch(function(error){
      console.log(error.message);
  })