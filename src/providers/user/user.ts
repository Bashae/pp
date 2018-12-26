import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

@Injectable()
export class UserProvider {
  userCollection: AngularFirestoreCollection;
  currentUserDoc: AngularFirestoreDocument;
  currentUser: any;

  constructor(
    public afs: AngularFirestore
  ) {
    this.userCollection = this.afs.collection('users');
  }

  setUser(v) {
    let userQuery = this.userCollection.ref
      .where('ui', '==', v)
      .get();

    userQuery.then(res => {
      res.forEach(element => {
        this.currentUserDoc = this.userCollection.doc(element.id);
        this.currentUserDoc.get().subscribe(ref => {
          this.currentUser = ref.data();
        })
      });
    });
  }

  unsetUser() {

  }

}
