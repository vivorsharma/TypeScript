// In typescript, tuples are a data strucuture that allows you to store a fixed size collection of elements of diffrent types. they are
//  similar to arrays, but the key diffrence: the types of elements in tuples are fixed and declared at the time of creation, whereas
// the same type, and their size can vary.


type PersonInfo = readonly[string, number, boolean]

const displaypersonInfo = (person: PersonInfo) => {
const [name, age, hasDriverLicense] = person;
console.log(`Name: ${name}, Age: ${age}, hasDriverLicense:${hasDriverLicense ? "Yes" : "No"}`)
}

const person2: PersonInfo = ['vivor', 22, true]
const person3: PersonInfo = ['user',24,false]

// person2.push("coding")
// console.log(person2)

displaypersonInfo(person2);
displaypersonInfo(person3)


// Note: using Readonly u have to declare the type. without declaring type u cannot perform any action.