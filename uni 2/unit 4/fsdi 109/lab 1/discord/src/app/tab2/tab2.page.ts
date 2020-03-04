import { Component } from '@angular/core';
import { Message } from './../models/message'
import { ShareService } from '../services/share.service';
import { DataService } from '../services/data.service';
import { Friend } from '../models/friend';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  post: Message = new Message()
  myFriends: Friend[] = []

  constructor(private shareSrvc: ShareService, private dataSrvc: DataService) {
    this.dataSrvc.getAllFriends().subscribe(list => {
      this.myFriends = list.filter(f => f.belongsTo == shareSrvc.userName)
    })
  }
  
  sendMessage() {
    this.post.from = this.shareSrvc.userName
    this.dataSrvc.saveMessage(this.post)
    
    this.post = new Message()
  }

}
