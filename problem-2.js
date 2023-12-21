/* 1. Write a function that returns the sum of two numbers.
2. write function that return the sum of all numbers of # of params. 
Example: 
for param1 = 1 and param2 = 2, the output should be add(param1,param2) = 3
*/

// hint: use spreadOperator , forEach

function sum(params1, params2){
 return params1 + params2
}


function totalSum(...params){
 let value = 0;
 params.forEach((singleData)=>{
  value += singleData
 })
 console.log(value);
}

totalSum(1,2,3,4,5,6)












