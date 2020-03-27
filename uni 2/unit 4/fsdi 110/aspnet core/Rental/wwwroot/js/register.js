function Car(make, model, year, id, price, passenger, type, image, desc){
  this.make = make
  this.model = model
  this.year = year
  this.dailyPrice = price
  this.passenger = passenger
  this.fuelType = type
  this.imageUrl = image
  this.description = desc
}

function saveCar(){
  console.log("saving car")
    var make, model, year, id, price, passenger, type, image, desc
    make = $("#txtMake").val()
    model = $("#txtModel").val()
    year = $("#txtYear").val()
    price = $("#txtPrice").val()
    passenger = $("#txtPassenger").val()
    type = $("#txtType").val()
    image = $("#txtImage").val()
    desc = $("#txtDesc").val()

    var newCar = new Car(make, model, id, year, price, passenger, type, image, desc)
    console.log(newCar)

    var jsonString = JSON.stringify(newCar)

    $.ajax({
      url: "/catalog/SaveCar",
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

function init(){
    console.log("register car page")

    $("#btnSave").click(saveCar)
}

window.onload = init