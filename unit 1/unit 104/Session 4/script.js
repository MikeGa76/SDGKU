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
  // add energy and item
  display = function() {
    document.getElementById(this.id).innerHTML = `<p> Name: ${this.name}</p> <p> Energy: ${this.energy}</p>`;
  }
  // attack opponent
  // fix attack not method of character
  attack = function(opponent) {
    let newEnergy = opponent.energy - 20;
    opponent.energy = newEnergy;
    opponent.display();
    document.getElementById("console").innerHTML = `<p> ${this.name} is attacking ${opponent.name} with a ${item.name} ... </p>`
    // console.log(character.attack)
    if (opponent.energy <= 0) {
      document.getElementById(opponent.id).innerHTML = `<p> You die`
      document.getElementById("console").innerHTML = `<p> Game Over</p>`
    }
  }
}
// end of constructor

// created characters
const character1 = new Character("Yoshi", 100, "c1")
const character2 = new Character("Toad", 100, "c2")
character1.display();
character2.display();
// constructed items
class item {
  constructor(iName, iHitPoints, img) {
    this.iName = iName;
    this.iHitPoints = iHitPoints;
    this.img = img;
  }
}
// created items
/*
const item1 = new Item("Goomba", 20, img / goomba.jpg)
const item2 = new Item("Banana", 5, img / Banana.png)
const item3 = new Item("Green Shell", 10, img / Greenshell.png)
// items in an array
const items = [item1, item2, item3]
// selected item
function selectItem() {
  let selection = Math.floor(math.random() * 3)
  return items[selection];
}
selectItem()
*/
// reset the game
const reset = function() {

}
