import { Component } from '@angular/core';

/**
 * Generated class for the OnlineListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'online-list',
  templateUrl: 'online-list.html'
})
export class OnlineListComponent {

  text: string;

  constructor() {
    console.log('Hello OnlineListComponent Component');
    this.text = 'Hello World';
  }

}
