var userInput = function (value) {
    if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'string') {
        return value.toString().toUpperCase();
    }
    else {
        return Error;
    }
};
console.log(userInput("vivor"));
console.log(userInput(25));
var formatValue = function (value) {
    if (typeof value === "number") {
        return value.toFixed(2).concat("$");
    }
    else if (typeof value === 'boolean') {
        return value;
    }
    else if (typeof value === 'string') {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    else {
        return Error;
    }
};
console.log(formatValue(55));
console.log(formatValue(true));
console.log(formatValue("vivor"));
