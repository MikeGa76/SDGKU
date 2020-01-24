var mathLib = require('./myMath')

function sayHello() {
  console.log("hello 2")
}
// sayHello()

function exc1() {
  // print numbers 1 -10, except 7
  var num = 11
  for (let i = 0; i < num; i++) {
    if (i != 7) {
      console.log(i)
    }
  }
}
// exc1()
function exc2() {
  for (let i = 20; i > 0; i--) {
    if (i != 7 && i != 13) {
      console.log(i)
    }
  }
}
// exc2()
mathLib.funMath()
var res = mathLib.sum(25, 265)
console.log("result:", res)
var bigger = mathLib.greater(2848248, 39320)
console.log("bigger: ", bigger)
var smaller = mathLib.smaller(2848248, 39320)
console.log("smallest: ", smaller)

var r1 = mathLib.division(2352532, 52532)
console.log(r1)
var r2 = mathLib.division(1235, 0)
console.log(r2)
var e1 = mathLib.evens(523)
console.log(e1)
var e2 = mathLib.evens(8)
console.log(e2)

function homework() {
  var numbers = [23, 45, 23, 56, 2, -34, 8, 1, -12, 2, 123, 9045, 546, 34, -123];

  // 1 find the smallest
  var smallest = numbers[0]
  for (var i = 0; i < numbers.length; i++) {
    var n = numbers[i]
    if (n < smallest) smallest = n
  }
  // 2 the biggest
  var biggest = numbers[0]
  for (var i = 0; i < numbers.length; i++) {
    var n = numbers[i]
    if (n > biggest) biggest = n
  }
  // 3 the sum of them all
  var sum = 0

  for (let i = 0; i < numbers.length; i++) {
    num = numbers[i]
    sum = sum + num
  }
  var res = sum / numbers.length
  // 4 the multi of them all
  var multi = 0
  for (let i = 0; i < numbers.length; i++) {
    num = numbers[i]
    multi = multi * num
  }
  // 5 non positive (lower than 0)
  for (let i = 0; i < numbers.length; i++) {
    num = numbers[i]
    if (num < 0) {
      var neg = num
    } else false
  }
  // 6 print the odd numbers
  function odds(num) {
    var res = num % 2
    if (res == 0) return false
    return true
  }
}
homework()
