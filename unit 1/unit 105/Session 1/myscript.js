//object literal
const salon = {
  name: "The Fashion pets",
  phone: "5512314",
  address: {
    street: "Av. Uni",
    number: "262-c"
  },
  workingHours: {
    days: "Mon-Fri",
    open: "9:00 am",
    close: "5:00 pm"
  },
  pets: [],
  count: function() {
    alert("We have: " + salon.pets.length + " pets")
  }
}

//object destructuring
let { name, phone, address: { street, number }, workingHours: { days, open, close } } = salon
// console.log(name, street)
document.querySelector('.info').innerHTML = `<h2 class="display-4"> ${name} </h2> <p>Phone Number: <br> ${phone} </p><h2> Address Info </h2> <p class="lead"> Street: ${street}${number} </p> <p class="lead"> It is open from ${days} ${open} to ${close}.</p>`

//document.querySelector('footer .info').innerHTML = `<h2 class="display-4"> ${name} </h2> <p>Phone Number: <br> ${phone} </p><h2> Address Info </h2 > <p class="lead"> Street: ${street}${number} </p> <p class="lead"> It is open from ${days} ${open} to ${close}.</p>`

// object constructor
var petC = 0
class Pet {
  constructor(name, age, breed, gender, service, ownerName, phoneContact) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.ownerName = ownerName;
    this.phoneContact = phoneContact;
    this.id = 'pet' + petC
    petC += 1
    this.hunger = 10;
    this.happiness = 5;
  }
  ownerInfo = function() {
    console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone: " + this.phone)
  }
  feed = function() {
    this.hunger -= 10
    this.happiness += 10
    console.log("Feeding... ")
  }
  status = function() {
    console.log("Hunger: " + this.hunger + "\n" + "Happiness: " + this.happiness)
  }
}
/* Examples:
const pet1 = new Pet("Shaggy", 2, "boxer", "male", "shower", "Sam", "90123");
const pet2 = new Pet('asd', 2, 'ds', 'qwe', 'weq', '213', '125');
console.log(salon)
pet1.feed()
pet1.status()
pet1.feed()
pet1.status()
salon.pets.push(pet1)
salon.pets.push(pet2)
console.table(salon.pets)
salon.count()
var text = ' ';
for (var i = 0; i < salon.pets.length; i++) {
  text += ` < p > Name: ${ salon.pets[i].name } <br> Age: ${salon.pets[i].age}<br> Gender: ${salon.pets[i].gender}</p>`;
}
*/
/* Unrelated Examples:
document.getElementById("cont").innerHTML = `${text}`;
      //unrelated
      const ex = document.getElementsByTagName('p')
for (var i = 0; i < ex.length; i++) {
    ex[i].setAttribute('class', 'example')
  }
  var heading3 = document.createElement('h3')
  var text2 = document.createTextNode('My first script using the DOM')
  heading3.appendChild(text2)
  document.getElementById('example').appendChild(heading3)
  // heading3.cloneNode(true)
  // var col1 = document.querySelectorAll('#col1')
  // heading3.insertBefore(heading3 col1[0])

  var deleted = document.querySelector('header h1')
  deleted.remove()
  */
var textName = document.getElementById('petName')
var textAge = document.getElementById('petAge')
var textBreed = document.getElementById('petBreed')
var textGender = document.getElementById('petGender')
var textService = document.getElementById('petService')
var textOwnerName = document.getElementById('ownersName')
var textContactPhone = document.getElementById('contactPhone')
function register() {
  const thePet = new Pet(textName.value, textAge.value, textBreed.value, textGender.value, textService.value, textOwnerName.value, textContactPhone.value)
  salon.pets.push(thePet)
  alert('you have registered a pet.')
  console.log(thePet)
  clean()
  displayPet(thePet)
}
function clean() {
  textName.value = ''
  textAge.value = ''
  textBreed.value = ''
  textGender.value = ''
  textService.value = ''
  textOwnerName.value = ''
  textContactPhone.value = ''
}
function displayPet(aPet) {
  var tBody = document.getElementById('rowPet')
  var row = `<tr id='${aPet.id}'>
    <td>${aPet.name}</td>
    <td>${aPet.age}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.service}</td>
    <td>${aPet.ownerName}</td>
    <td>${aPet.phoneContact}</td>
    <td>
      <button onclick='remove("${aPet.id}")'> Delete </button></td>`

  tBody.innerHTML += row
}
function remove(petId) {
  console.log('Deleted pet: ' + petId)
  var tr = document.getElementById(petId)
  for (let i = 0; i < salon.pets.length; i++) {
    var selectedPet = salon.pets[i]
    if (selectedPet.id == petId) {
      indexDelete = i
    }
  }
  salon.pets.splice(indexDelete, 1)
  tr.remove()
}
function search() {
  var ss = document.getElementById('petSearch').value
  var searchedPet = ss.toLowerCase()
  var flag = false
  console.log(searchedPet)
  for (let i = 0; i < salon.pets.length; i++) {
    var selectedPet = salon.pets[i]
    if ((selectedPet.id == searchedPet.toLowerCase()) || (searchedPet.name.toLowerCase() == selectedPet)) {
      flag = true
      document.getElementById('result').innerHTML`searched pet: ${salon.pets[i].name}`
    }
    if (flag == false) {
      document.getElementById('result').innerHTML = `< h3 > it doesn't exist... </h3>`
    }
  }
  document.getElementById('petSearch').value = ''
}
