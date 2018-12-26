import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserProvider } from '../user/user';
import * as firebase from 'firebase/app';
import { Credentials } from "../../app/credentials";

@Injectable()
export class AuthProvider {
  public user: firebase.User;
  public userId: string;
  public isLoggedIn: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserProvider
  ) {
    // this.checkAuth();
  }

  checkAuth() {
    this.afAuth.authState.subscribe(user => {
      user ? this.setUser(user, true) : this.setUser(user, false);
    })
  }

  setUser(user, isLoggedIn) {
    // Set auth info
    this.isLoggedIn = isLoggedIn;
    this.user = user;

    // Set user info
    this.userId = this.user.uid || null;
    this.userService.setUser(this.user.uid);
  }

  signInWithEmail(credentials: Credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signUpWithEmail(credentials: Credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }

}
