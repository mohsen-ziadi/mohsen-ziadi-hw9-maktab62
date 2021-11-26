let c;

function sum(a, b) {
    c = a + b;
    return c;
}

function difference(a, b) {
    c = a - b;
    return c;
}

function product(a, b) {
    c = a * b;
    return c;
}

function quotient(a, b) {
    c = a / b;
    return c;
}

let cal = {
    sum,
    difference,
    product,
    quotient
}

module.exports = cal;