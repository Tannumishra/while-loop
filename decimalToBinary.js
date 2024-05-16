// Write a JavaScript program to convert a decimal number to binary.
var num = 150 
var bin = 0
var rem, i = 1, step = 1

while(num != 0)
    {
        rem = num % 2;
        x = parseInt(num/2);
        bin = bin + rem * i;
        i= i * 10;
    }
    console.log(bin)

    //// try kia pr hua nhi sir
    // aapse puchna h

    
