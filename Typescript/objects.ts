// Objects are used to represent data with key-value pairs. each key in object is a string
// (or symbol in ES6) that maps to a value.

const person: {
    name: string;
    age: number;
    isStudent: boolean;
    address: { city: string; country: string; }

} = {
    name: 'john',
    age: 25,
    isStudent: true,
    address: {
        city: "pune",
        country: "india"
    }
}


// accessing the object data
console.log(person.address.country)

// update the object properties
person.address.country = 'Nepal'
console.log(person.address.country)


// Type alias is a way to give a name to a specific type or combinations  of types. it allows you
// to create a custom name for a type, making it easier to reuse and refer to the same type in 
// diffrent parts of your code.Type aliases provide better readability, organization, and 
// abstraction of complex types.


type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    // class?: string;      (optional property) 
    address: { city: string; country: string; }
}

const person1: Person = {
    name: 'jared',
    age: 25,
    isStudent: true,
    address: {
        city: "mumbai",
        country: "india"
    }
}


// Define a type representing a product with properties for name, price, and quantity, create a 
// product object with following data.

type Product = {
    Name: string;
    Price: number;
    Quantity: number
}

const product: Product= {
    Name: "Laptop",
    Price: 12000,
    Quantity: 5
}

//  write a function called calculateTotalPrice that calculates and returns the total price (price quantity)
// of the product.


function calculateTotalPrice(product: Product){
return `${product.Name} total cost is  ${product.Price * product.Quantity}`
}

console.log(calculateTotalPrice(product))