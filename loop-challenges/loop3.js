/*Sigma - Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log
 the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050in the end.*/



 function addNums(sum){
    sum = 0;
    for (var i=1; i<=100; i++){
        sum+=i;        
    }
    return sum;
 }
 var result = addNums();
 console.log(result);