// #1


// #2
function sum( num1, num2, num3, num4, num5, num6, num7, num8, num9){
    return num1+ num2 + num3 +  num4 +  num5 + num6 +  num7+  num8 + num9;
}
let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
document.write(result)
document.write("<br>");



// #3
let num = prompt()
function even(num){
    if(num % 2 == 0){
        return "this number is even";
    }else{
        return " this number is odd";
    }
    
}
console.log(even(num))