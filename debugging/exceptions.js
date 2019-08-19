// Error(message[, fileName[, lineNumber]]])

function div(a, b) {
    if (b === 0) {
        throw new Error('dividing by zero')
    }
    if (b === undefined) {
        throw new Error('b is undefined')
    }
}

try {
    console.log(div(14))
} catch (e) {
    console.error(e.message)
}