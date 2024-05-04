// call sigature are typically used inside type notations to describe the shape of functions within
// object types.
var student = {
    name: "John",
    age: 20,
    gender: "male"
};
var introduction = function (student) {
    return "Hello, my name is ".concat(student.name, " and I am ").concat(student.age, " years old.");
};
console.log(introduction(student));
