// students score, total possible score
// 12/20 -> 75% you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let calculateStudentGrade = function (studentScore, totalPossibleScore) {
  let percentageRight = (studentScore / totalPossibleScore) * 100
  let letterGrade = ''
  
  if (percentageRight >= 90){
    letterGrade = 'A'
  } else if (percentageRight >= 80){
    letterGrade = 'B'
  } else if (percentageRight >= 70){
    letterGrade = 'C'
  } else if (percentageRight >= 60){
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }
  return `You got ${percentageRight}% right which is an "${letterGrade}".`
}

let studentScore = 50
let totalPossibleScore = 100

let grade = calculateStudentGrade(studentScore, totalPossibleScore)
console.log(grade)