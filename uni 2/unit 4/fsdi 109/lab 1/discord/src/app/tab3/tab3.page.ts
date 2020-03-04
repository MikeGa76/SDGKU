import { Component } from '@angular/core';
import { Friend } from '../models/friend';
import { ShareService } from '../services/share.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model: Friend = new Friend()
  myFriends: Friend[] = []

  constructor(private shared: ShareService, private data: DataService) {
    this.data.getAllFriends().subscribe(list => {
      // filer friends obj that belong to me
      /*for(var i=0; i < list.length; i++){
        if(list[i].belongsTo == this.shared.userName){
        this.myFriends.push(list[i])
        }
      } */
      this.myFriends = []
      this.myFriends = list.filter(f => f.belongsTo == this.shared.userName)
    })
  }
  
  saveFriend() {
    this.model.belongsTo = this.shared.userName
    this.data.saveFriend(this.model)

    this.model = new Friend()
  }
}
