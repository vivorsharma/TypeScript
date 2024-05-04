//  Genrics in typescript allow you to create reusable components or functions that work with multiple data types.


function logAndreturn<T>(value:T):T{
return value;
}

const numberResult:number = logAndreturn(42);
console.log(numberResult)

const stringResult: string = logAndreturn('Hello genrics')
console.log(stringResult)


// using genrics
function addNum<T>(value:T):T{
return value;
}

const numResult: number = addNum(10+20)
console.log(numResult)