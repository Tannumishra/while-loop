//Write a JavaScript program to find the sum of odd numbers from 1 to 50

var sp = 1
var ep = 50
var sum = 0

while(sp<=ep){
    if(sp%2 !== 0){
       sum = sum + sp
    }
    sp++
}
console.log(sum)
    



// var sp = 1
// var sum = 0

// while(sp <= 10){

//      sum  = sum + sp
//      sp++
//     // console.log(sum)
// }
// console.log("Sum of first 10 numbers: ",sum)
// //avg = total number sum / total number
// console.log("Avg of first 10 numbers: ",sum/10)