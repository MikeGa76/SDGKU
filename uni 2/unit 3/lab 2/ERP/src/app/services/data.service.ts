import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sampleList = ["Name1", "User2", "Sergio", "Lois", "Gabe", "Sandie", "Leo", "Donald", "Kullen", "Matt"];
  userList = []
  constructor() { }
  public getSampleList(){
    return this.sampleList
  }
  public saveUser(user: User){
    this.userList.push(user)
  }
  public getUsers(){
    return this.userList
  }
}
