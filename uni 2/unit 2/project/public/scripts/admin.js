var serverURL = "http://localhost:8080/api/"
// object constructor
function Item(code, desc, price, img, category, stock, deliveryDays) {
  this.code = code
  this.description = desc
  this.price = price
  this.image = img
  this.category = category
  this.stock = stock
  this.deliveryDays = deliveryDays
  this.user = "mike"
}

function clearForm() {
  $("#txtCode").val("")
  $("#txtCode").focus()
  $("#txtDescription").val("")
  $("#txtPrice").val("")
  $("#txtImage").val("")
  $("#txtCategory").val("")
  $("#txtStock").val("")
  $("#txtDeliveryDays").val("")
}

function saveItem() {
  // get the values
  var code = $("#txtCode").val()
  var description = $("#txtDescription").val()
  var price = $("#txtPrice").val()
  var image = $("#txtImage").val()
  var category = $("#txtCategory").val()
  var stock = $("#txtStock").val()
  var deliveryDays = $("#txtDeliveryDays").val()
  // create an object
  var theItem = new Item(code, description, price, image, category, stock, deliveryDays)
  //console.log(theItem)

  var jsonString = JSON.stringify(theItem)
  //console.log(jsonString)
  // send the object to the server
  $.ajax({
    url: serverURL + "items",
    type: "POST",
    data: jsonString,
    contentType: "application/json",
    success: function(res) {
      console.log("success: ", res)
      // data saved
      clearForm()
      // show notification
      $("#alertSuccess").removeClass("hidden")
      // setTimeout(fn, miliseconds)
      setTimeout(function() {
        $("#alertSuccess").addClass("hidden")
      }, 3000)
    },
    error: function(err) {
      console.log("Error: ", err)
    }
  })
}

//saveItem()
// test Ajax
/*
function testAjax() {
  $.ajax({
    url: serverURL + "test",
    type: 'GET',
    success: function(res) {
      console.log(res)
    },
    error: function(err) {
      console.log(err)
    }
  })
}
*/
function drawItem(mess) {
  // create the syntax
  var syntax =
    `<div class='messagesM'>
      <ul>
        <li class="">${Message.name} </li>
        <li>${Message.message} </li>
        <button class='btn btn-sm btn-info'> + </button>
      </ul>
    </div>`

  // get the element from the screen
  var container = $("#messages")

  // append the syntax to the element
  container.append(syntax)
}

function displayMessages() {
  // travel the array
  for (var i = 0; i < message.length; i++) {
    // get the item
    var item = messages[i]
    // draw the items on the DOM (html)
    drawItem(item)
    //console.log(item)
    var cat = message.category
    //ask if it doesn't include the cat
    if (!categories.includes(message)) {
      // then push cat into categories
      categories.push(message)
    }
  }
}

function retrieveMessages(){
    // get items from server
    $.ajax({
      url: serverURL + "messages",
      type: "GET",
      success: function(res) {

        for (let i = 0; i < res.length; i++) {
          var item = res[i]
          if (item.user === "mike") {
            message.push(message)
          }
        }
        displayMessages()
      },
      error: function(err) {
        console.log("Error: ", err)
      }
    })
}

//testAjax()
function init() {
  // console.log("admin page!")
  // retreive initial data

  // hook events
  $("#btnSave").click(saveItem)
  retrieveMessages()
}
window.onload = init
