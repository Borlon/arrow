import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EjercicioModalPage } from './ejercicio-modal/ejercicio-modal';

/**
 * Generated class for the EjerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejercicios',
  templateUrl: 'ejercicios.html',
})
export class EjerciciosPage {

  ejercicioPageModal: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
      console.log('Entra en constructor EjerciciosPage');
      this.ejercicioPageModal = this.modalCtrl.create(EjercicioModalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjerciciosPage');
  }

  crearEjercicio() {
    console.log('Llama a crearEjercicio()');
      this.ejercicioPageModal.present();

  }

  /* openModalWithParams() {
    let myModal = this.modalCtrl.create(ModalPage, { 'myParam': this.myParam });
    myModal.present();
  } */

}
