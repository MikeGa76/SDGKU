import { Injectable } from '@angular/core';
import { Message } from '../models/message'
import { map } from "rxjs/operators";
import { firestore } from "firebase";
import {AngularFirestoreCollection, 
  AngularFirestore } from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  messages: Observable<Message[]>
  messageCollection: AngularFirestoreCollection<Message> // pipeline collection

  friends: Observable<Friend[]>
  friendsCollection: AngularFirestoreCollection<Friend>// pipeline to firebase collection

  constructor(private fb: AngularFirestore) {
    this.messageCollection = fb.collection<Message>("posts")// open pipeline
    this.friendsCollection = fb.collection<Friend>("friends")
   }

  public saveMessage(message: Message){
    var item = Object.assign({}, message)
    this.messageCollection.add(item)
  }

  public retrieveMessagesFromDB(){
    this.messages = this.messageCollection.valueChanges()
  }

  public getAllMessages(){
    this.retrieveMessagesFromDB()
    return this.messages
  }

  public saveFriend(friend: Friend){
    var item = Object.assign({}, friend)
    this.friendsCollection.add(item)
  }

  public retrieveFriendsFromDB(){
    this.friends = this.friendsCollection.valueChanges()
  }

  public getAllFriends(){
    this.retrieveFriendsFromDB()
    return this.friends
  }
}
