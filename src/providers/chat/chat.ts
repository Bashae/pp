import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class ChatProvider {
  chatCollection: AngularFirestoreCollection<any>;
  openChatCollection: AngularFirestoreCollection<any>;
  chatMessages: Observable<any[]>;

  constructor(
    public afs: AngularFirestore
  ) {
    this.chatCollection = this.afs.collection('ch');
  }

  createNewChat(r, s) {
    let newUserChat = {
      r_id: r,
      s_id: s
    }
    return this.chatCollection.add(newUserChat);
  }

  getUserChatId(sender_id, receiver_id) {
    let messages = this.chatCollection.ref
      .where('s_id', '==', sender_id)
      .where('r_id', '==', receiver_id)
      .get();

    return messages;
  }

  getUsersChat(chatLocation) {
    this.openChatCollection = this.afs.collection('ch')
                                .doc(chatLocation)
                                .collection('messages');

    return this.openChatCollection.ref.orderBy("time", "asc").get();
  }

  sendChatMessage(message) {
    this.openChatCollection.add(message).then(res => {
      console.log('sent chat message');
      console.log(res);
    })
  }
}
