import { Component } from '@angular/core';

import { HomePage } from '../../pages/home/home';
import { ListPage } from '../../pages/list/list';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  pages: Array<{ title: string, component: any }>;

  constructor() {
    console.log('Hello MenuComponent Component');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
  }

}
