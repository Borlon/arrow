import { EjercicioBean } from './../../../beans/ejercicio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EjercicioModalPage } from './ejercicio-modal/ejercicio-modal';
import { GymServiceProvider } from '../../../providers/gym-service/gym-service';

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
  listaEjercicios: EjercicioBean[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private gymServiceProvider: GymServiceProvider) {
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

  getAll() {
    this.listaEjercicios = new Array<EjercicioBean>();
    this.gymServiceProvider.getAll()
      .then(ejercicios => {
        this.listaEjercicios = ejercicios;
        console.log(this.listaEjercicios);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
