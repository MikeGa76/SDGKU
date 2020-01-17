var serverURL = "http://restclass.azurewebsites.net/API/"
var items = []
var categories = []
function fetchCatalog() {
  // get items from server
  $.ajax({
    url: serverURL + "points",
    type: "GET",
    success: function(res) {
      //  console.log("success: ", res)
      // solve, show only MY items
      // travel response on the array
      // get each item on the aray
      // if the item.user == "sergio"
      // then, push the item into items array
      for (let i = 0; i < res.length; i++) {
        var item = res[i]
        if (item.user === "mike") {
          items.push([i])
        }
      }
      displayCatalog()
    },
    error: function(err) {
      console.log("Error: ", err)
    }
  })
}

function displayCatalog() {
  // travel the array
  for (var i = 0; i < items.length; i++) {
    // get the item
    var item = items[i]
    // draw the items on the DOM (html)
    drawItem(item)
    //console.log(item)
    var cat = item.category
    //ask if it doesn't include the cat
    if (!categories.includes(cat)) {
      // then push cat into categories
      categories.push(cat)
    }
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
      <label class='price' >$ ${(item.price * 1).toFixed(2)}</label>
      <button class='btn btn-sm btn-info'> + </button>
    </div>`

  // get the element from the screen
  var container = $("#catalog")

  // append the syntax to the element
  container.append(syntax)
}
function drawCategories() {
  // get the container for categories
  var container = $('#categories')
  // travel the categories
  // get each category
  //create an LI for category
  // add li to container
  var c = categories[i]
  for (let i = 0; i < categories.length; i++) {
    cont = `<li class="list-group-item">
    <a href="#" onclick="searchByCategory('${c}')">${c}</a>
    </li>`
    container.append(cont)
  }
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

function searchByCategory(catName) {
  // clear prev results
  $("#catalog").html("")
  // travel array and show only items that contains the text
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    if (item.category.toLowerCase().includes(catName)) {
      drawItem()
    }
  }
}
function init() {
  // get data
  fetchCatalog()
  // hook events
  $("#btnSearch").click(search)
  $("#txtSearch").keypress(function(e) {
    if (e.keyCode === 13) {
      search()
    }
  })
  $("#catalog").on("click", ".item", function() {
    // $(this).toggleClass("selected")
    // get the iamge of the clicked element
    var img = $(this).find("img").clone()
    $(".modal-body").html(img)
    $("#modal").modal()
  })
}
// HTTP methods
// HTTP status codes

window.onload = init
