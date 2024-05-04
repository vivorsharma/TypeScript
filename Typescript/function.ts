// write a function called isPalindrome that takes a string as a parameter and returns true if 
// the string is a palindrome (reads the same forwards and backwards), false otherwise.

// Normal function

// function isPalindrome(str:string): boolean{
//   let newStr = str.split("").reverse().join("")
//   if(newStr===str){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(isPalindrome("213"))


// arrow function
const isPalindrome = (str:string): boolean => {
let newStr = str.split("").reverse().join("");
return newStr === str
}

console.log(isPalindrome("321"))


// create a function called calculateAverage that takes an array of numbers as a parameter and returns
// the average of a number.?

function calculateAverage(num: number[]): number{
 let sum = num.reduce((acc, curr) => acc + curr, 0) 
 let avg = sum/num.length
 return avg
}
console.log(calculateAverage([2,3,4,5,6]))


// write a function called findMaxValue that takes an a array of numbers as a parameter and 
// returns the maximum value in the array.

function findMaxValue(num: number[]): number{
let max = num.reduce((a:number, b:number) => a>b?a:b)
return max
}

console.log(findMaxValue([2,3,4,5,6]))