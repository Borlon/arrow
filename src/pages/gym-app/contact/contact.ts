import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public lista: any[];

  constructor(public navCtrl: NavController) {
    console.log('Entra en contructor ContactPage');
    this.lista = new Array<any>();
    this.inicializarLista();
  }

  inicializarLista() {
    for (let i = 0; i < 20; i++) {
      this.lista.push('Elemento ' + i);
    }
  }

}
