import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1';
  // auto exec fn when the component is created
  constructor(){
  // variables and strong typing
    console.log("construct of appComponent")
    var name: string = "Your Name"
    var age: number = 23
    var found: boolean = true
    var users: string[] = []

    
    users.push("sergio")
    var x = users[0]

    // delcaration 
    var xyz: string
    // initialization
    xyz = users[0]

    var price = 99
    var desc = "product" // var desc: string
    var inStock = false

    this.hello()
  }

  hello(){
    var name = "my name"
    console.log("fn hello working..")
    console.log(name)
    
  }
  times( howManyTimes: number ){

  }
}
