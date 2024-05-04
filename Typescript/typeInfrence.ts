// Declare a variable message and initialize it with the value "Hello, Typescript", infer the type
// message using type infrence.


let message: string = "Hello, Typescript";

console.log(message)

// NOTE: The compiler infers the type string.


// Write a function calculateArea that takes the length and width parameters of type number
// and returns their product. infer the return type of the function using type infrence.

function calculateArea(len : number, wid: number){
return len * wid
}

console.log(calculateArea(10,15))

// NOTE: The compiler infers the type number.