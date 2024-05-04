// Objects are used to represent data with key-value pairs. each key in object is a string
// (or symbol in ES6) that maps to a value.
var person = {
    name: 'john',
    age: 25,
    isStudent: true,
    address: {
        city: "pune",
        country: "india"
    }
};
// accessing the object data
console.log(person.address.country);
// update the object properties
person.address.country = 'Nepal';
console.log(person.address.country);
var person1 = {
    name: 'jared',
    age: 25,
    isStudent: true,
    address: {
        city: "mumbai",
        country: "india"
    }
};
var product = {
    Name: "Laptop",
    Price: 12000,
    Quantity: 5
};
//  write a function called calculateTotalPrice that calculates and returns the total price (price quantity)
// of the product.
function calculateTotalPrice(product) {
    return "".concat(product.Name, "total cost ").concat(product.Price * product.Quantity);
}
console.log(calculateTotalPrice(product));
