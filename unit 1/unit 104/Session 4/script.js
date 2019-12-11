// write to the game console
var gameConsole = function() {
  document.getElementById("console").innerHTML = "<p> Hello </p>";
}
gameConsole()

//constructor function for characters
class Character {
  constructor(name, energy, id) {
    this.name = name;
    this.energy = energy;
    this.id = id;
  }
  // display: character info
  display = function() {
    document.getElementById(this.id).innerHTML = `<p> Name: ${this.name}</p> <p> Energy: ${this.energy}</p>`;
  }
  // attack opponent
  attack = function(opponent, item) {
    let newEnergy = opponent.energy - item.iHitPoints;
    opponent.energy = newEnergy;
    opponent.display();
    document.getElementById("console").innerHTML = `<p> ${this.name} is attacking ${opponent.name} with a ${item.iName} ... ${item.img}</p>`
    // console.log(character.attack)
    if (opponent.energy <= 0) {
      document.getElementById(opponent.id).innerHTML = `<p> You die`
      document.getElementById("console").innerHTML = `<p> Game Over</p>`
    }
  }
}

// created characters
const character1 = new Character("Yoshi", 100, "c1")
const character2 = new Character("Toad", 100, "c2")
character1.display();
character2.display();
// constructed items
class Item {
  constructor(iName, iHitPoints, img) {
    this.iName = iName;
    this.iHitPoints = iHitPoints;
    this.img = img;
  }
}
// created items

const item1 = new Item("Goomba", 20, '<img class="imgItem" src="img/goomba.jpg">')
const item2 = new Item("Banana", 5, "<img class='imgItem' src='img/Banana.png'>")
const item3 = new Item("Green Shell", 10, "<img class='imgItem' src='img/Greenshell.png'>")
// items in an array
const items = [item1, item2, item3]
// selected item
function selectItem() {
  let selection = Math.floor(Math.random() * 3)
  return items[selection];
}
selectItem()

// reset the game
const reset = function(char1, char2) {
  char1.energy = 100
  char2.energy = 100
  char1.display();
  char2.display();
  document.getElementById("console").innerHTML = `Game has been reset!`
}
