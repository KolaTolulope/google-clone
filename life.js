function valueChecker(firstVal, secondVal) {
  return firstVal === secondVal
}

let result1 = valueChecker(5, '5')
let result2 = valueChecker(5, 5)
let result3 = valueChecker('5', '5')

console.log(result1, result2, result3)

// false true true
