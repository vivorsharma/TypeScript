//  Genrics in typescript allow you to create reusable components or functions that work with multiple data types.
function logAndreturn(value) {
    return value;
}
var numberResult = logAndreturn(42);
console.log(numberResult);
var stringResult = logAndreturn('Hello genrics');
console.log(stringResult);
function addNum(value) {
    return value;
}
var numResult = addNum(10 + 20);
console.log(numResult);
