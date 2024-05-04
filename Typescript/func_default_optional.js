// Typescript allows you to define optional and default paramters in function.
// Optional parameters are denoted by appending a ? symbol after th parameter name,
// and default paramters are specified by providing a default value in the parameter decalarations.
var greet = function (name, id) {
    return "Welcome ".concat(name, " and ur id is ").concat(id);
};
console.log(greet('vivor', 12));
