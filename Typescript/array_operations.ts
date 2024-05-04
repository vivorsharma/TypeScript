const fruits: string[] = ['apple', 'banana', 'orange'];

// adding Element to the end of the array
const updatedFruits = fruits.push('mango')
console.log(updatedFruits)
console.log(fruits)

// removing Element from the end of the array
const lastData = fruits.pop()
console.log(lastData)

// using for loop
for(let i=0;i<fruits.length;i++){
console.log(fruits[i])
}

// using for of loop
for(const fruit of fruits){
    console.log(fruit)
}

// using for each
fruits.forEach((curVal: string) => console.log(curVal))


// Map and filter method in arraay
// The map method creates the new array by applying a provided function to each element of the oriinal
// array. it transform each element an returns a new array with transformed value.

// Doubling each number
const numbers: number[] = [1,2,3,4,5]
const doubleNum : number[]= numbers.map((num: number) =>{
    return num* 2
})
console.log(doubleNum)

// converting number to string
const string: string[] = numbers.map((num: number) => {
    return num.toString()
})

console.log(string)


// filter even numbers
const evenNum: number[] = numbers.filter((num: number) => {
    return num % 2===0
}) 
console.log(evenNum)

// filter numbers greater than 3
const greaterNum: number[] = numbers.filter((num: number) => {
    return num > 3
})
console.log(greaterNum)


// 1) Given an array of strings representing names, create a new array that contains the uppercase
// version of each name.

const arrNames: string[] = ["test", "user", "drive"]
const upperCaseName: string[]  = arrNames.map((str: string) => {
    return str.toUpperCase()
})
console.log(upperCaseName)

// 2) given an array of numbers, create a new array that contains the square of each number.
const sqNumber:number[] = [2,3,4,5,6]
const newSquare: number[] = sqNumber.map((num) => {
return num * num
})
console.log(newSquare)

// 3) given an array of strings, create a new array that contains only the strings with a length 
// greater than 4.

const strArr:string[] = ['ALice','Bod','Anna','Andrew']
const newStr:string[] = strArr.filter((str: string) => {
    return str.length > 4
}) 
console.log(newStr)


// 4) given an array of strings, filter out the names that start with the letter 'A'
const letter: string[] = strArr.filter((str: string) => {
return str.indexOf('A')===0
})
console.log(letter)