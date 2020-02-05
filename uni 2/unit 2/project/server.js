// console.log('ai')
var express = require("express")
var app = express() // create an app
var itemList = []
var ItemDB
var MessageDB

// config
//enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Rquested-With, Content-Type, Accept");
    next();
});
//config body parse to read info in request
var bparser = require("body-parser")
app.use(bparser.json())
// to server static files ( css, js, img, pdfs)
app.use(express.static( __dirname + '/public'))

// to serve HTML
var ejs = require('ejs')
app.set('views', __dirname +'/public') // where are the html files?
app.engine('html', ejs.renderFile)
app.set('view engine',ejs)

// MongoDB connection config
var mongoose = require('mongoose')
mongoose.connect("mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin")
var db = mongoose.connection

// web server endpoints
app.get('/', (req, res) => {
  res.render('catalog.html')
})
app.get('/contact', (req, res) => {
  res.render("contact.html")
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


/* api end points
*/
app.post('/api/items', (req, res) => {
  console.log("clients want to store items")
  var itemForMongo = ItemDB(req.body)
  itemForMongo.save(function(err, item){
      if(err){
        console.log("Error:", error)
        res.status(500)
        res.send(err)
      }
      // no console.error
      res.status(201) // created
      res.json(item)
    })
})

app.post('/api/messages', (req, res)=> {
  console.log('client attempting message')
  var messageForMongo = MessageDB(req.body)
  messageForMongo.save( function (err, savedMessage){
    if(err){
      console.log("Error:", error)
      res.status(500)
      res.send(err)
    }
    console.log("Message saved!")
    res.status(201) // created
    res.json(savedMessage)
  })
})

app.delete('/api/items', (req, res) => {
  ItemDB.find({}, function(error, data){
    if(error){
      res.status(500)
      res.send(error)
    }
    res.status(200) // ol
    res.json(data)
  })
}),

app.get('/api/items/:id', (req, res) =>{
  var id = req.params.id
  itemDB.find({ _id: id}, function(error, item){
    if(error){
      res.status(500)
      res.send(error)
    }
    res.status(200)
    res.json(item)
  })
}),

app.get('/api/messages', (req, res) =>{
    if(error){
      res.status(404)
      res.send(error)
    }
    res.status(200)
    res.json(message)
  }),
  app.get('/api/items', (req, res) =>{
      if(error){
        res.status(404)
        res.send(error)
      }
      res.status(200)
      res.json(item)
    }),
//
app.get('/api/items/byName/:name', (req, res) =>{
  var name = req.params.name
  itemDB.find({ user: name}, function(error, data){
    if(error){
      res.status(404)
      res.send(error)
    }
    res.status(200)
    res.json(data)
  })
}),


app.delete('/api/items', (req, res) => {
  var item = req.body
//   // if this user is not authenticated return console.error
//
  ItemDB.findByIdAndRemove(item._id, function(error){
    if(error){
      res.status(500)
      res.send(error)
    }
    res.status(200)
    res.send("Item removed!")
  })
}),

// start server ***
db.on('open', function(){
  console.log("db connected")

// data types allowed for schemas: string, number, date, buffer, boolean, objectID, array

  //define structure (models) for the objectss on each collection
  var itemsSchema = mongoose.Schema({
    code: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    stock: Number,
    deliveryDays: Number,
    user: String
  })

  var messageSchema = mongoose.Schema({
    name: String,
    message: String
  })
 // create constructor(mongoose model)
  ItemDB = mongoose.model("itemCh6", itemsSchema)
  MessageDB = mongoose.model("messagesCh6", messageSchema)
}),
db.on('error', function(err){
  console.log('error db:' + err)
}),

app.listen(8080, function() {
  console.log("server at htttp://localhost:8080")
  console.log("press ctrl+c to kill it")
})
