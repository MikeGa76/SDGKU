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
document.getElementById("col1").innerHTML = `<h2 class="display-4"> ${name} </h2> <p>Phone Number: <br> ${phone} </p>`

document.getElementById("col2").innerHTML = `<h2> Address Info </h2> <p class="lead"> Street: ${street}${number} </p>`

document.getElementById("col2").innerHTML = `<p class="lead"> It is open from ${days} ${open} to ${close}.</p>`

// object constructor
class Pet {
  constructor(name, age, breed, gender, service, ownerName, phoneContact) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.ownerName = ownerName;
    this.phoneContact = phoneContact;
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
const pet1 = new Pet("Shaggy", 2, "boxer", "male", "shower", "Sam", "90123");
const pet2 = new Pet('asd', 2, 'ds', 'qwe', 'weq', '213', '125');
console.log(salon)
// pet1.feed()
// pet1.status()
// pet1.feed()
// pet1.status()
salon.pets.push(pet1)
salon.pets.push(pet2)
console.table(salon.pets)
salon.count()
for (vare i = 0; i < salon.pets.length; i++) {
  console.log(salon.pets[i].name)
  console.log(salon.pets[i].age)
  console.log(salon.pets[i].gender)
}
