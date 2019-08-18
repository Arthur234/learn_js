function filter(func, array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result.push(array[i])
        }
    }
    return result
}

function greaterThan(number) {
    return function inner(item) {
        return item > number;
    }
}

let array = [1, 2, 3, 4, 5];
let result = filter(greaterThan(5), array);

console.log(result);