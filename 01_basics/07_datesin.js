// Dates

let mydate = new Date()

console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toTimeString())
console.log(mydate.toUTCString())
console.log(mydate.getTimezoneOffset())

console.log(typeof mydate)

// let mycreateDate = new Date(2025, 0, 13)

// let mycreateDate = new Date(2025, 0, 13, 12 , 30)

let mycreateDate = new Date("11-03-2021")

console.log(mycreateDate.toLocaleString()) 

let myupdatedDate = new Date()
 
console.log(myupdatedDate)

console.log(myupdatedDate.getTime())

console.log(Math.round(Date.now()/1000))

console.log(mycreateDate.getDate())

console.log(myupdatedDate.toLocaleString('en-IN', {
    weekday: 'long',    // Full name of the weekday
    year: 'numeric',    // Full year (2024)
    month: 'long',      // Full name of the month (December)
    day: '2-digit',     // Day of the month (10)
    hour: '2-digit',    // Hour in 2-digit format (05)
    minute: '2-digit',  // Minute in 2-digit format (30)
    second: '2-digit',  // Second in 2-digit format (59)
    timeZoneName: 'long' // Full time zone name (Greenwich Mean Time)
}))