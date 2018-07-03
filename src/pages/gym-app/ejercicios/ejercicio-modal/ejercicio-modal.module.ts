import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EjercicioModalPage } from './ejercicio-modal';

@NgModule({
  declarations: [
    EjercicioModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EjercicioModalPage),
  ],
})
export class EjercicioModalPageModule {}
