// call sigature are typically used inside type notations to describe the shape of functions within
// object types.

type Student ={
    name: string;
    age: number;
    gender?: string 
}

const student: Student ={
    name: "John",
    age: 20,
    gender: "male"
}


const introduction = (student: Student) => {
    return `Hello, my name is ${student.name} and I am ${student.age} years old.`
}
console.log(introduction(student))