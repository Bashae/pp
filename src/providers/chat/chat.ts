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
    this.openChatCollection = this.afs.collection('ch').doc(chatLocation).collection('messages', ref => ref.orderBy('time'));
    return this.openChatCollection;
  }

  sendChatMessage(message) {
    return this.chatCollection.add(message);
  }
}



// import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

// @Injectable()
// export class CommentsProvider {
//   postCollection: AngularFirestoreCollection<any>;
//   commentCollection: AngularFirestoreCollection<any>;
//   commentDoc: AngularFirestoreDocument;

//   constructor(
//     public afs: AngularFirestore
//   ) {
//     this.postCollection = this.afs.collection('st');
//   }

//   getComments(id) {
//     this.commentCollection = this.postCollection.doc(id).collection('co', ref => ref.orderBy('time'));
//     return this.commentCollection;
//   }

//   uploadComment(newCom) {
//     return this.commentCollection.add(newCom);
//   }

// }