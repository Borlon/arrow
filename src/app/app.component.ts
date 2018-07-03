import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { HomePage } from '../pages/home/home';
import { NombresPages, Plataformas, VariablesSesion } from '../utils/literales';

@Component({
  selector: 'ion-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, image: any }>;
  plataformas: any;
  variablesSesion: any;
  options: NativeTransitionOptions;

  /**Literales */
  tituloApp: String = 'Mis aplicaciones';

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private nativePageTransitions: NativePageTransitions,
    private storage: Storage) {
    console.log('Entra en constructor MyApp');
    this.initializeApp();
    this.pages = new NombresPages().arrayPaginasMenu;
    this.plataformas = new Plataformas();
    this.variablesSesion = new VariablesSesion();
    console.log(this.plataformas);
    console.log(this.plataformas.ANDROID);
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

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is(this.plataformas.ANDROID)) {
        this.storage.set(this.variablesSesion.PLATAFORMA, this.plataformas.ANDROID);
      } else {
        console.log('ionic serve');
        this.storage.set(this.variablesSesion.PLATAFORMA, this.plataformas.ANDROID);
      }
    });
  }

  openPage(page) {
    console.log(page);
    this.inicializarOptions(page);
    this.nativePageTransitions.flip(this.options);
    this.nav.setRoot(page.component);
  }
}
