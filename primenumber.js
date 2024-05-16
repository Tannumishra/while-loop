//Write a JavaScript program to determine if a given number is prime or not.

var num = 5
var sp = 1
var count = 0

while(sp <= num){
    if(num%sp==0){
        count++}

    
    sp++
}
if(count==2){
    console.log("Its a prime number")
}
else{
    console.log("Its not a prime number")
}