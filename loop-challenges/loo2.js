//Print the sequence - Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5

function sequence(){
    var sequence = [];
    for (var i = 4; i>=-3.5; i-=1.5){
       sequence.push(i);
    }
    return sequence;
}
var result = sequence();
console.log(result);

// using just for loop
for (var i = 4; i>=-3.5; i-=1.5){
   console.log(i);
 }
