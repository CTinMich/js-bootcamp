// Global scope (convertFarenheitToCelsius, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)

let convertFarhenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9
  
  if (celsius <= 0) {
    let isFreezing = true
  }
  
  return celsius
}

let tempOne = convertFarhenheitToCelsius(32)
let tempTwo = convertFarhenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)