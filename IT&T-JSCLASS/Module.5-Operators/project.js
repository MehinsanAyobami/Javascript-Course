// ? 1.
let username = 'Chioma Adekunle';
let age = 17;

let confirmation = age >= 18
// ! Conditional (Ternary)
confirmation = confirmation ? 'Yea is true': 'Nope, is false'
console.log(confirmation)

let user = 'Mace'
let firstDisplay = 'light theme'
let secondDisplay = 'dark theme'

let finalDisplay = user == firstDisplay ? 'Mace does not like light ': 'Mace likes dark theme'
console.log(finalDisplay)
// console.log(`${username} is ${confirmation}`)

// ? 2. Verify if a user has entered the correct password and username

// * The user role setup
let userRole = 'Admin';
let userPassword = 'Javin238%';

// * The entered role and password user
let inputRole = 'Admin';
let inputPassword = 'Javin238%';

let isAuthenticated = (userRole === inputRole && userPassword === inputPassword)
console.log(isAuthenticated)

