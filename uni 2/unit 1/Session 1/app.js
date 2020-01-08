function createToDo() {
  // get the text
  var text2 = $("#txtTest").val()
  // create the li
  var li = '<li>' + text2 + '<button>Done!</button> </li>'
  // <li> ${text2} <button>Done!</button> </li>

  // add the li to the ul
  $("#pending").append(li)
  // clear the input field
  $("#txtTest").val("")
  // set the focus to the field
  $("txtTest").focus()
}
function init() {

  // hook events
  $("#btnSave").click(createToDo)
  $("#txtTest").keypress(function(e) {
    if (e.key == "Enter") {
      createToDo()
    }
  })
}
// when the browser finishes rendering all html  elements will excute a function called init
window.onload = init;
