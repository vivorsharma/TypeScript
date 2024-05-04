// Typescript allows you to define optional and default paramters in function.

// Optional parameters are denoted by appending a ? symbol after th parameter name,

// and default paramters are specified by providing a default value in the parameter decalarations.


const greet = (name: string, id?: number): string => {
return `Welcome ${name} and ur id is ${id}`
}

console.log(greet('vivor'))