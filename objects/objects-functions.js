let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}.`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(bookSummary.summary)

// Challenge area
// Create function take fahrenheit in - return object with all three

let convertTemp = function (temp) {
  return {
    celsius: temp,
    fahrenheight: (temp - 32) * 5/9,
    kelvin: (temp + 459.67) * 5/9
  }
}

let temps = convertTemp(32)
console.log(temps)
