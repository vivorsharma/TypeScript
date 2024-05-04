const userInput = (value: string | number | boolean) => {
if(typeof value === 'number'){
    return value * 10;
}else if(typeof value === 'string'){
    return value.toString().toUpperCase()
}else{
    return Error
}
}


console.log(userInput("vivor"))
console.log(userInput(25))


// we want to create a function that formats the value passed to it in a specific way based:
// if input type is a number, it should add a dollar sign and format it with two decimal places.
// if input type is a string it should capitiliaze the first letter
// if input type is s string it should return yes for true or no for false.

const formatValue = (value: string | number | boolean) => {
if(typeof value === "number"){
return value.toFixed(2).concat("$")
}else if(typeof value === 'boolean'){
return value;
}else if(typeof value ==='string'){
    return value.charAt(0).toUpperCase() + value.slice(1);
}else {
    return Error
}
}

console.log(formatValue(55));   
console.log(formatValue(true));     
console.log(formatValue("vivor"));   
