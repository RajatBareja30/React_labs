//<-----------------------  exercise 3 ------------------------->

var promisse1= 101;
var  promisse2="follow the white"
var promisse3 = new Promise( function(resolve,reject){
    return resolve("rabbit.. neo");
})

Promise.all([promisse1,promisse2,promisse3])
    .then(function(values)
{
    console.log(values);
});