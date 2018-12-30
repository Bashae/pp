import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ChatUserPage } from '../chat-user/chat-user';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  player: any;
  currentUser: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: UserProvider
  ) {
    this.player = this.navParams.get('user');
    this.currentUser = this.user.currentUser;
  }

  goToChatUserPage() {
    this.navCtrl.push(ChatUserPage, {
      data: {
        r_id: this.player.id,
        s_id: this.currentUser.ui
      }
    })
  }

}
