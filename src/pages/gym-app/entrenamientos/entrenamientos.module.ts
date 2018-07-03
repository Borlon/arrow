import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntrenamientosPage } from './entrenamientos';

@NgModule({
  declarations: [
    EntrenamientosPage,
  ],
  imports: [
    IonicPageModule.forChild(EntrenamientosPage),
  ],
})
export class EntrenamientosPageModule {}
