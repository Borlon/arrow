import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { VariablesSesion } from '../../utils/literales';
import { Storage } from '@ionic/storage';
import { SuperTabs } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-gym-app',
  templateUrl: 'gym-app.html',
})
export class GymAppPage {
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  tab1Root: any = 'EjerciciosPage';
  tab2Root: any = 'EntrenamientosPage';
  tab3Root: any = 'ContactPage';

  variablesSesion: any;
  isAndroid: Boolean = false;

  constructor(private storage: Storage) {

    this.variablesSesion = new VariablesSesion();
    this.storage.get(this.variablesSesion.PLATAFORMA).then((valor) => {
      console.log(valor);
      if (valor === 'android') {
        this.isAndroid = true;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GymAppPage');
  }

  onTabSelect(tab: { index: number; id: string; }) {
    console.log(`Selected tab: `, tab);
  }
}
