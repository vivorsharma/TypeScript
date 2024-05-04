var fruits = ['apple', 'banana', 'orange'];
// adding Element to the end of the array
var updatedFruits = fruits.push('mango');
console.log(updatedFruits);
console.log(fruits);
// removing Element from the end of the array
var lastData = fruits.pop();
console.log(lastData);
// using for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// using for of loop
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// using for each
fruits.forEach(function (curVal) { return console.log(curVal); });
// Map and filter method in arraay
// The map method creates the new array by applying a provided function to each element of the oriinal
// array. it transform each element an returns a new array with transformed value.
// Doubling each number
var numbers = [1, 2, 3, 4, 5];
var doubleNum = numbers.map(function (num) {
    return num * 2;
});
console.log(doubleNum);
// converting number to string
var string = numbers.map(function (num) {
    return num.toString();
});
console.log(string);
// filter even numbers
var evenNum = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNum);
// filter numbers greater than 3
var greaterNum = numbers.filter(function (num) {
    return num > 3;
});
console.log(greaterNum);
// 1) Given an array of strings representing names, create a new array that contains the uppercase
// version of each name.
var arrNames = ["test", "user", "drive"];
var upperCaseName = arrNames.map(function (str) {
    return str.toUpperCase();
});
console.log(upperCaseName);
// 2) given an array of numbers, create a new array that contains the square of each number.
var sqNumber = [2, 3, 4, 5, 6];
var newSquare = sqNumber.map(function (num) {
    return num * num;
});
console.log(newSquare);
// 3) given an array of strings, create a new array that contains only the strings with a length 
// greater than 4.
var strArr = ['ALice', 'Bod', 'Anna', 'Andrew'];
var newStr = strArr.filter(function (str) {
    return str.length > 4;
});
console.log(newStr);
// 4) given an array of strings, filter out the names that start with the letter 'A'
var letter = strArr.filter(function (str) {
    return str.indexOf('A') === 0;
});
console.log(letter);
