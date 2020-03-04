
function fetchCatalog(){
    console.log("fetching catalog")

    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function(res){
            console.log("from Server", res)

            for(var i=0;i < res.length;i++ ){
                displayCar(res[i])
            }
        },
        error: function(details){
            console.log("ERROR:", details)
        }
    })
}

function displayCar(car){
    var template = 
    `<div class="item">
        <img src="${car.imageUrl}">
        ${car.year}
    </div>`
    var container = $("#catalog")
    container.append(template)
}

function init(){
    console.log("catalog page")

    fetchCatalog()
}




window.onload = init
