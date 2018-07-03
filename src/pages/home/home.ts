import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { NombresPages } from '../../utils/literales';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: NativeTransitionOptions;
  arrayPaginasMenu: Array<{ title: string, component: any, image: any }>;
  pages: Array<{ title: string, component: any, image: any }>;

  constructor(public navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) {

    this.arrayPaginasMenu = new NombresPages().arrayPaginasMenu;
    this.pages = new Array<{ title: string, component: any, image: any }>();
    for (let index = 1; index < this.arrayPaginasMenu.length; index++) {
      console.log(this.arrayPaginasMenu.length);
      console.log(this.arrayPaginasMenu[index]);
      this.pages.push(this.arrayPaginasMenu[index]);
    }
  }

  inicializarOptions(page): void {
    if (page.title === 'Inicio') {
      this.options = {
        direction: 'down',
        duration: 500,
        slowdownfactor: 3,
        slidePixels: 20,
        iosdelay: 100,
        androiddelay: 150,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 60
      };
      console.log(page.title);
    } else {
      this.options = {
        direction: 'up',
        duration: 500,
        slowdownfactor: 3,
        slidePixels: 20,
        iosdelay: 100,
        androiddelay: 150,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 60
      };
      console.log(page.title);
    }
  }

  openPage(page) {
    console.log(page);
    this.inicializarOptions(page);
    this.nativePageTransitions.flip(this.options);
    this.navCtrl.setRoot(page.component);
  }
}
