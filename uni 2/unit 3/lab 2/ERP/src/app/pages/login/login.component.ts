import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = ""
  password = ""
  registeredUsers=[]

  constructor(private data : DataService) { 
    this.registeredUsers = data.getUsers()
  }

  ngOnInit() {
  }

  validateLogin(){
    // travel the array 
    
    // compare user and password with each ele in the array
    // if find a match, login correct
    for(var i =0; this.registeredUsers.length; i++) {
      var user = this.registeredUsers[i]
      if(user.userName == this.userName && user.password == this.password){
        console.log("credentials are correct, you are logged in!")
        return true
      }
    }
  }
}
