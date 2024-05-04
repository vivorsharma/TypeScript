// In typescript, tuples are a data strucuture that allows you to store a fixed size collection of elements of diffrent types. they are
//  similar to arrays, but the key diffrence: the types of elements in tuples are fixed and declared at the time of creation, whereas
// the same type, and their size can vary.
var displaypersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", hasDriverLicense:").concat(hasDriverLicense ? "Yes" : "No"));
};
var person2 = ['vivor', 22, true];
var person3 = ['user', 24, false];
person2.push("coding");
console.log(person2);
displaypersonInfo(person2);
displaypersonInfo(person3);
