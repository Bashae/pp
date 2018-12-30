import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {
  @Input() post;
  postTime: any;

  constructor() {}

  ngOnChanges() {
    this.postTime = this.convertToMins(this.post.time);
    console.log('what is postTime');
    console.log(this.postTime);
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

}
