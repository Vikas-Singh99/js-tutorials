const name = "Deep"
const repoCount = "5"


// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String ('vikassingh-thakur')
console.log(gameName.blink());
// console.log(gameName[0])

// console.log(gameName.__proto__)


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.at(-5));
// console.log(gameName.indexOf('u'));
// console.log(gameName.anchor('Link'));
const newString = gameName.substring(0, 3)
// console.log(newString)

const anotherString = gameName.slice(-17, 12)
// console.log(anotherString)

const newStringOne = "     deep      "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://deep.com/deepu%40sjhdjh"

// console.log(url.replace('%40', ('-')))

let firstName = "Vikas"
let lastName = " Singh"

// console.log(firstName.concat(lastName));
// console.log(gameName.split('-')) 

let testing = "Vikas Singh";

// console.log(testing.endsWith('Vikas'))

// console.log(testing.fontcolor('red'));
// console.log(testing.fontsize('40'));
// console.log(testing.includes('Vikas'));
// console.log(testing.indexOf('Singh'));
// Fix: Define the 'isWellFormed' method if needed (for this example, just checking if not empty)
String.prototype.isWellFormed = function() {
    return this.length > 0; // Check if the string is non-empty
};

console.log(testing.italics());
console.log(testing.link("http://www.google.com"));

let score = "8";

console.log(score.padEnd(5, "0"));
console.log(score.padStart(4, "3"));

// console.log(testing.repeat(100));

// console.log(testing.replace("Singh", "Thankur"))

let spr = "I am working as a front end devloper as in Unwiork Technologies as";

console.log(spr.replaceAll("front end devloper", "Web designer"))

// console.log(testing.slice(4, 8))

let ntr = "Vikas, Singh, Thankur"

console.log(ntr.split(","))

// console.log(testing.substring(0, 4))

console.log(testing.toLocaleLowerCase())

