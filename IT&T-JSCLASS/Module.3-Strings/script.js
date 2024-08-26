// ! -- strings
// 

let venue = '23, Odion Road';
console.log(venue);
console.log(typeof venue);

let venueTwo = "Lapal House";
console.log(venueTwo);

let finalVenue = `The ocassion is holding at ${venue} at ${venueTwo}`;
console.log(finalVenue);

// ! 

let firstName = 'Jemima';
console.log(firstName);
let place = 'Market';
console.log(place)
let sum = 50+30;
console.log(sum)

let sentence = `${firstName} went to the ${place} to get oranges for ₦${sum}`;
console.log(sentence)

//? JAVASCRIPT STRINGS METHODS

// toLowerCase()
let vehicle = 'Benz'
console.log(vehicle.toLowerCase())

// toUpperCase()
console.log(vehicle.toUpperCase())


let word = `the vehicle called ${vehicle} has ${vehicle.length} letters`
console.log(word)

let line = "ITANDT Solutions is in Lapal House"
const letter = line.slice()
console.log(letter)

// ! learn other string methods
// string length is to show number of characters
// I dont understand the string slice
// string repeat is to repeat string


// ? JAVASCRIPT STRING TO NUMBERS CONVERSION
let total = '45';
console.log(total)

// convert string to number
const convert = parseInt(total)
console.log(convert)