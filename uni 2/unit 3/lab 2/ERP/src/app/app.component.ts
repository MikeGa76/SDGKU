import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  name = "Mike"
  test(){
    console.log("user clicked button")
    this.name = 'this is coool'
  }
  userName = ""
  calculate(){
    console.log("input val: ", this.userName)
  }
  clear(){
    this.userName = ""
  }
}
