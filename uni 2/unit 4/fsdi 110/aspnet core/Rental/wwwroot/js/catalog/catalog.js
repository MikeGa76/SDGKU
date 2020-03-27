
function fetchCatalog(){
    console.log("fetching catalog")

    // function sortedCatalog(){
    //     for(var i=0;i < car.dailyPrice.length;i++ ){
    //         var res = dailyPrice[i]
    //         if (dailyPrice[i] < res){
    //             return dailyPrice[i]
    //         } else if (dailyPrice[i] > res) {
    //             return res
    //         } else return dailyPrice[i]
    //     }
    // }

    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function(res){
            console.log("from Server", res)

            var sorted = []
            sorted = res.sort(function(left, right){
                if(left.dailyPrice < right.dailyPrice){
                    return -1 // the first param goes first
                }
                else if(right.dailyPrice > left.dailyPrice){
                    return -1
                }
                return 0
            })

            for(var i=0;i < sorted.length;i++ ){
                displayCar(sorted[i])
            }
        },
        error: function(details){
            console.log("ERROR:", details)
        }
    })
}

function displayCar(car){
    for (let i = 0; i < car.length; i++){
        var placement = car[i]
    }
    var template = 
    `<div class="item">
        <img src="${car.imageUrl}">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Make</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Daily Price</th>
            <th scope="col">Seats</th>
            <th scope="col">Type</th>
            <th scope="col">Fuel Type</th>
            <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">${car.id}</th>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td> $ ${car.dailyPrice.toLocaleString()}</td>
            <td>${car.passengers}</td>
            <td>${car.type}</td>
            <td>${car.fuelType}</td>
            <td>${car.description}</td>
            </tr>
            <tr>
        </tbody>
        </table>
    </div>`
    var container = $("#catalog")
    container.append(template)
}

function init(){
    console.log("catalog page")

    fetchCatalog()
}

// `<div class="item">
// <img src="${car.imageUrl}">
// ${car.id}
// ${car.make}
// ${car.model}
// ${car.year}
// ${car.dailyPrice}
// ${car.passengers}
// ${car.type}
// ${car.description}
// ${car.fuelType}
// </div>`


window.onload = init
