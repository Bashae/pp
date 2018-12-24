import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  introText: string = "Find players near you for battles and raids.";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  goToRegistrationPage() {
    this.navCtrl.setRoot(RegistrationPage);
  }

  goToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

}
