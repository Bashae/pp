import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Credentials } from "../../app/credentials";
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = new Credentials;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider
  ) {}

  signIn() {
    this.auth.signInWithEmail(this.credentials)
      .then(res => { 

      })
      .catch(err => {
        
      })
  }

}
