let name = 'Chris Thomas'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())


let isPasswordValid = function (pass) {
  return pass.length >= 9 && !pass.includes('password')
}

console.log(isPasswordValid('asdfs'))
console.log(isPasswordValid('absd123456'))
console.log(isPasswordValid('abc123password'))