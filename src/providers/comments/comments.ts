import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class CommentsProvider {
  postCollection: AngularFirestoreCollection<any>;
  commentCollection: AngularFirestoreCollection<any>;
  commentDoc: AngularFirestoreDocument;

  constructor(
    public afs: AngularFirestore
  ) {
    this.postCollection = this.afs.collection('st');
  }

  getComments(id) {
    this.commentCollection = this.postCollection.doc(id).collection('co', ref => ref.orderBy('time'));
    return this.commentCollection;
  }

  uploadComment(newCom) {
    return this.commentCollection.add(newCom);
  }

}
