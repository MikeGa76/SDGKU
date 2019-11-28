/*
alert("Hello world");
console.log("Hello from the console");
prompt("Name:");
var x
x = "mike"
console.log(x)
x = 30
console.log(x)
const num1 = 20
const num2 = 104
var sum = num1 + num2
var rest = num1 - num2
var mult = num1 * num2
var div = num1 / num2

document.getElementById('division').innerHTML = ` <h2> calc </h2> <br> <br> Num1: ${num1} <br>  Num2: ${num2} <br> sum=${sum} <br> rest=${rest} <br> Mult=${mult} <br> Div=${div}`;
// name = prompt("");
for (var i = 0; i < 10; i++) {
  console.log("hello")
}

/*
var email = prompt("email:")
var n = email.includes("@")
if (n === false) {
  console.log("no")
} else {
  console.log("yes")
}

if (num1 > num2) {
  console.log("The largest ")
}
else if (num1 < num2) {
  console.log("some")
}
else {
  console.log("large num2")
}

let students = ['angel', 'Josh', 'victor'];
console.table(students)
*/

var values = [420, 560, 210, 854]
var valAfterCom = values.join(', ')
alert("All values contained in array: " + valAfterCom)
function avgSum(arr) {
  let sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length
}
alert("The average: " + avgSum(values))
