//Print odds 1-20 - Using a loop write code that will console.log all of the odd values from 1 up to 20.
for ( i=1; i <= 20; i++){
    if (i%2 == 1){
        console.log(i);
    }
}
// another way to write it would be


for ( i=1; i<=20; i+=2){
    console.log(i);
}