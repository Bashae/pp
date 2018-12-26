import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserProvider } from '../user/user';
import * as firebase from 'firebase/app';
import { Credentials } from "../../app/credentials";

@Injectable()
export class AuthProvider {
  public user: firebase.User;
  public userId: string;
  public isLoggedIn: boolean = false;

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserProvider
  ) {}

  checkAuth() {
    return this.afAuth.authState.subscribe();
  }

  setUser(user) {
    // Set auth info
    this.isLoggedIn = true;
    this.user = user;

    // Set user info
    this.userId = this.user.uid;
    this.userService.setUser(this.user.uid);
  }
  
  unsetUser() {
    this.isLoggedIn = false;
    this.user = null;
    this.userId = null;
    this.userService.unsetUser();
  }

  signInWithEmail(credentials: Credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signUpWithEmail(credentials: Credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logOut() {
    this.unsetUser();
    return this.afAuth.auth.signOut();
  }

}
