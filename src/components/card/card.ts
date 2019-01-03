import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostPage } from '../../pages/post/post';
import { PostProvider } from '../../providers/post/post';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {
  @Input() post;
  postTime: any;

  constructor(
    public navCtrl: NavController,
    public posts: PostProvider,
    public user: UserProvider
  ) {}

  ngOnChanges() {
    this.postTime = this.convertToMins(this.post.time);
  }

  convertToMins(stamp) {
    let date = Date.now();
    let diff = (date + stamp);
    let z = ((diff / 1000) / 60);

    return Math.ceil(z);
  }

  getCeilDistance(num) {
    let op = "~ ";
    if(num < 1) {
     op = "< ";
    }
    
    return (op + Math.ceil(num));
  }

  viewPost() {
    this.navCtrl.push(PostPage, {post: this.post});
  }

}
