module.exports = {
  funMath: function() {
    console.log("Math!")
  },
  sum: function(num1, num2) {
    return num1 + num2
  },
  greater: function(num1, num2) {
    if (num1 > num2) {
      return num1
    } else {
      return num2
    }
  },
  smaller: function(num1, num2) {
    if (num1 < num2) {
      return num1
    } else {
      return num2
    }
  },
  division: function(number, by) {
    if (by === 0) {
      console.error("DO NOT DIVIDE BY 0")
      return by
    }
    return number / by
  },
  evens: function(num) {
    var res = num % 2
    if (res == 0) return true
    return false
  },

}
