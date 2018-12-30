import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat-user',
  templateUrl: 'chat-user.html',
})
export class ChatUserPage {
  receiver: any;
  sender: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    let data = this.navParams.get('data');
    this.receiver = data.r_id;
    this.sender = data.s_id;
  }

}
