var items = []
function fetchCatalog() {
  items = [
    {
      "code": "1234",
      "description": "This first",
      "price": 99.12,
      "image": "img/ab.jpg",
      "category": "ships",
      "stock": 2,
      "deliveryDays": 169
    },
    {
      "code": "1234",
      "description": "something",
      "price": 99.12,
      "image": "img/earthjpg.jpg",
      "category": "ships",
      "stock": 2,
      "deliveryDays": 169
    },
    {
      "code": "1234",
      "description": "ba",
      "price": 99.12,
      "image": "img/img.jpg",
      "category": "ships",
      "stock": 2,
      "deliveryDays": 169
    }, {
      "code": "1234",
      "description": "else",
      "price": 99.12,
      "image": "img/spacejpg.jpg",
      "category": "ships",
      "stock": 2,
      "deliveryDays": 169
    }
  ]
}

function displayCatalog() {
  // travel the array
  for (var i = 0; i < items.length; i++) {
    // get the item
    var item = items[i]
    // draw the items on the DOM (html)
    drawItem(item)
  }
}

function drawItem(item) {
  // create the syntax
  var syntax =
    `<div class='item'>
      <img src='${item.image}'>
      <label class='code'>${item.code}</label>
      <label class='category'>${item.category}</label>
      <label class='desc'>${item.description}</label>
      <label class='price'>${item.price}</label>
      <button class='btn btn-sm btn-info'> + </button>
    </div>`

  // get the element from the screen
  var container = $("#catalog")

  // append the syntax to the element
  container.append(syntax)
}
function search() {
  var text = $("#txtSearch").val().toLowerCase()
  // clear previous results
  $("#catalog").html("")
  // travel array and show only the items that cotains the text
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    // if the title contains the text, or the catagory contains the text, or the code is equal to the text, or the price is equal to the text, then show the item on the screen
    if (item.description.toLowerCase().includes(text)
      || item.category.toLowerCase().includes(text)
      || item.code == text
      || item.price == text
    ) {
      drawItem(item)
    }
  }
}

function init() {
  // get data
  fetchCatalog()
  displayCatalog()
  // hook events
  $("#btnSearch").click(search)
  $("#txtSearch").keypress(function(e) {
    if (e.keyCode === 13) {
      search()
    }
  })
}
// HTTP methods
// HTTP status codes

window.onload = init
