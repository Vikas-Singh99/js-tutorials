const score = 400

const balance = new Number(100);

console.log(balance.toExponential());

console.log(balance.toFixed(2));

const anotherNumber = 1000000

console.log(anotherNumber.toLocaleString("en-IN"));

const decinumber = 222.7676

console.log(decinumber.toPrecision(4));


// ++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-5))

console.log(Math.round(44.4))

console.log(Math.ceil(44.4))

console.log(Math.floor(44.8))

console.log(Math.min(2, 4, 1, 5))

console.log(Math.max(9, 4, 6, 3))

console.log(Math.random())

console.log(Math.random()*10 + 1)

console.log(Math.floor(Math.random()*10) + 1)

const min = 10

const max = 20

console.log(Math.floor(Math.random() * ( max - min + 1 )) + min )