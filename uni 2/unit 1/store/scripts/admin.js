var serverURL = "http://restclass.azurewebsites.net/API/"
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
    url: serverURL + "points",
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

//testAjax()
function init() {
  // console.log("admin page!")
  // retreive initial data

  // hook events
  $("#btnSave").click(saveItem)
}
window.onload = init
