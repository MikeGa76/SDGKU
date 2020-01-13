var serverURL = "http://restclass.azurewebsites.net/API/"
function saveItem() {
  // get the values
  var code = $("#txtCode").val()
  var description = $("txtDescription").val()
  var price = $("txtPrice").val()
  var image = $("txtImage").val()
  var category = $("txtCategory").val()
  var stock = $("txtStock").val()
  var deliveryDays = $("txtDeliveryDays").val()
  // create an object
  // send the object to the server
  $.ajax({

  })
}
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

//testAjax()
function init() {
  console.log("admin page!")
  // retreive initial data

  // hook events
  $("#btnSave").click(saveItem)
}
window.onload = init
