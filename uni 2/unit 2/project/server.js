// console.log('ai')
var express = require("express")
var app = express() // create an app

app.get('/', (req, res) => {
  console.log('someone wants the root page')
  res.send('hello my friend!')
})
app.get('/contact', (req, res) => {
  res.send("this will be the contact page")
})
app.get('/aboutMe', (req, res) => {
  res.send("<h1 style='color:red'> mike</h1>")
})
app.get('/exc/:message', (req, res) => {
  console.log("message from client: ", req.params.message)
  var msj = req.params.message
  var vowels = ''
  var allVowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < msj.length; i++) {
    letter = msj[i]
    console.log(letter)

    if(allVowels.indexOf(letter.toLowerCase()) != -1) {
      vowels +=letter
    }

    // 3 return each vowel only once
    // example: hello -> eo
    // this is a test -> iae
  }
  res.status(202)
  res.send(vowels)
})

app.listen(8080, function() {
  console.log("server at htttp://localhost:8080")
  console.log("press ctrl+c to kill it")
})
