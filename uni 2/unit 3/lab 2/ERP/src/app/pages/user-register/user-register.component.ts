import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User()
  retypePassword  : string
  savedAlertVisible = false

  constructor(private dataSrv : DataService) { }

  ngOnInit() {
  
  }
  isPasswordStrong(){
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return strongRegex.test(this.retypePassword)
  }

  isDataCorrect(){
  // validate for password strength
  if(!this.isPasswordStrong()){
    return true // button will be disabled
  }

    return !this.model.email 
  || !this.model.userName 
  || !this.model.password 
  || this.model.password != this.retypePassword  
  }

  save(){
    console.log("saving user", this.model)
    // save the user (this.model) into a service
    this.dataSrv.saveUser(this.model)
    // clear the form
    this.model = new User()
    this.retypePassword = null
    this.savedAlertVisible = true
  }

}
