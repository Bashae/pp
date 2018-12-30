import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostNewPage } from '../post-new/post-new';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}

  openNewPostPage() {
    this.navCtrl.push(PostNewPage)
  }
}
