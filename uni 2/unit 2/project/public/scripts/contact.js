var serverURL = "http://localhost:8080/api/"
// object constructor
function Message(name, message) {
  this.name = name
  this.message = message
  this.user = "mike"
}

function saveItem() {
  // get the values
  var contactName = $("#name").val()
  var contactMessage = $("#message").val()
  // create an object
  var theMessage = new Message(contactName, contactMessage)

var jsonString = JSON.stringify(theMessage)
//console.log(jsonString)
// send the object to the server
 // console.log(theMessage)
  $.ajax({
    url: serverURL + "messages",
    type: "POST",
    data: jsonString,
    contentType: "application/json",
    success: function(res) {
      console.log("success: ", res)
    },
    error: function(err) {
      console.log("Error: ", err)
    }
  })
}

function init() {
  console.log("contact Page!")
  // retreive initial data

  // hook events
  $("#sendMessage").click(saveItem)
}
window.onload = init
