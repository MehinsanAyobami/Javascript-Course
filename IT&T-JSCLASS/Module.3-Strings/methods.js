// ? charAt()
let fullname = ' Eniola Kehinde';
console.log(fullname)

let method = fullname.charAt(10)
console.log(method.toUpperCase())

// ? concat()
let park = 'Jakande';
let car = 'Benz';

let carPark = car.concat(` is packed at ${park}`).toLowerCase()
console.log(carPark)

// ? endsWith()
let endsWithString = fullname.endsWith("Kehinde")
let startsWithString = fullname.startsWith("Eniola")
console.log(startsWithString)

// ? includes()
let includesName = fullname.includes("ni")
console.log(`It is ${includesName}`)

// ? indexOf()

// ? match()
let matchName = /Eniola/
let theResult = fullname.match(matchName)
console.log(theResult)

// ? padEnd() & padStart()
let firmName = "ITANDT"
let padsEnd = firmName.padEnd(10, "Si")
let padStart = firmName.padStart(15, "op")
console.log(padStart)

// ? repeat()
let text = "Ronny is the GOAT"
let Print = text.repeat(7)
console.log(Print)

// ? replace()
let phrase = "Adidas is the best"
let result = phrase.replace("Adidas", "Nike");
console.log(result)

// ? trim() is to remove space
let trim = fullname.trim().toUpperCase()
console.log(trim)

// ? slice()
