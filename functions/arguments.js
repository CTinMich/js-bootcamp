// Multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1 , 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} = Score: ${score}`
  // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
// A 25% tip on $40 would be $10

let tipCalculator = function(total, tipPercent = .25) {
  let percent = tipPercent * 100
  let tip = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${tip}`
}

let total = (40).toFixed(2)
let tipPercent = undefined
let tip = tipCalculator(60)
console.log(tip)