import { EjercicioBean } from './../../../../beans/ejercicio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LiteralesEjercicioModalPage } from '../../../../utils/literales';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { GymServiceProvider } from '../../../../providers/gym-service/gym-service';

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

  public literalesEjercicioModalPage: LiteralesEjercicioModalPage;
  ejercicioBean: EjercicioBean;
  data: any;
  selectArray: String[];
  isPaginaInicializada: Boolean = false;
  options: CameraOptions;
  base64Image: String;
  isPhoto: Boolean = false;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    private gymServiceProvider: GymServiceProvider) {
    console.log('Entra en contructor EjercicioModalPage');
    this.inicializar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjercicioModalPage');
  }

  inicializar() {
    this.literalesEjercicioModalPage = new LiteralesEjercicioModalPage();
    this.data = {
      titulo: '',
      descripcion: '',
      musculo: '',
      imagen: ''
    };
    this.selectArray = new Array<string>();
    console.log(this.literalesEjercicioModalPage.MUSCULOS_ARRAY_SELECT);
    this.literalesEjercicioModalPage.MUSCULOS_ARRAY_SELECT.forEach(element => {
      this.selectArray.push(element);
    });
    console.log(this.selectArray);
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    };
    this.isPaginaInicializada = true;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  sacarFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = imageData;
      this.data.imagen = this.base64Image;
      console.log(this.base64Image);
    }, (err) => {
      // Handle error
      console.log('Error al tomar la foto');
    });
  }

  crearEjercicio() {
    console.log('Entra en crearEjercicio');
    this.ejercicioBean = new EjercicioBean(this.data);
    this.gymServiceProvider.create(this.ejercicioBean);
    this.navCtrl.pop();
  }
}
