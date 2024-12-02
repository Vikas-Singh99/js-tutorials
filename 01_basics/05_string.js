const name = "Deep"
const repoCount = "5"


// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String ('vikassingh-thakur')

// console.log(gameName[0])

// console.log(gameName.__proto__)


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.at(-5));
// console.log(gameName.indexOf('u'));
console.log(gameName.anchor('Link'));
const newString = gameName.substring(0, 3)
console.log(newString)

const anotherString = gameName.slice(-17, 12)
console.log(anotherString)

const newStringOne = "     deep      "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://deep.com/deepu%40sjhdjh"

console.log(url.replace('%40', ('-')))

// console.log(gameName.split('-')) 
