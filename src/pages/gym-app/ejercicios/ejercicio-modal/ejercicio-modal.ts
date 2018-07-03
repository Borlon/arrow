import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EjercicioModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejercicio-modal',
  templateUrl: 'ejercicio-modal.html',
})
export class EjercicioModalPage {

  tituloCabecera: String = 'Nuevo ejercicio';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      console.log('Entra en contructor EjercicioModalPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjercicioModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
