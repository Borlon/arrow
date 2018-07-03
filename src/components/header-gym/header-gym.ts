import { Component } from '@angular/core';

/**
 * Generated class for the HeaderGymComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-gym',
  templateUrl: 'header-gym.html'
})
export class HeaderGymComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderGymComponent Component');
    this.text = 'Hello World';
  }

}
