import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.post = this.navParams.get('post');
    console.log(this.post);
  }

}

// c: 0
// id: "iL82V93jOQL3CJ7CxFns"
// l: 0
// time: -12345678