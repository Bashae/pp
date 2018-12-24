import { Component } from '@angular/core';

/**
 * Generated class for the MapContainerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map-container',
  templateUrl: 'map-container.html'
})
export class MapContainerComponent {

  text: string;

  constructor() {
    console.log('Hello MapContainerComponent Component');
    this.text = 'Hello World';
  }

}
