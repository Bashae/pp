import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  player: any;

  constructor(
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.player = this.navParams.get('player');
  }

  editItem(type) {
    this.showPrompt(this.getTitle(type), this.getDescription(type));
  }

  getTitle(type) {
    return (type === 'un') ? 'Username' : (type === 'fc') ? 'Friend Code' : 'Real Name';
  }

  getDescription(type) {
    if(type === 'un') { return 'Enter the username you go buy in game.' }
    if(type === 'fc') { return 'Enter your friend code so that players can add you!' }
    if(type === 'rn') { return 'Enter your real or nickname, so that players know what to call you.' }
  }

  showPrompt(title, message) {
    const prompt = this.alertCtrl.create({
      title: 'Update ' + title,
      message: message,
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
