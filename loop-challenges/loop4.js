/**
 *  Write code that will multiply values from 1 to some value n 
 * until the variable product is larger than 100 million (1e8 for short). At the end console.log that value of n
 */
var product = 1;
var n=1;
while (product < 1e8){
    n++;
    product*=n;
}
console.log(n);