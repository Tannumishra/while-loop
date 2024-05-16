var num = 56787
var rev = 0
var remainder

while(num != 0){
    remainder = num % 10;
    rev = rev * 10 + remainder;
    num = Math.floor(num/10);
    
}
console.log(rev)
