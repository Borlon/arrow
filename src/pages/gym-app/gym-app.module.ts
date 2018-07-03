import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GymAppPage } from './gym-app';

import { HeaderGymComponent } from '../../components/header-gym/header-gym';
import { EjerciciosPage } from './ejercicios/ejercicios';
import { EntrenamientosPage } from './entrenamientos/entrenamientos';
import { ContactPage } from './contact/contact';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { EjercicioModalPage } from './ejercicios/ejercicio-modal/ejercicio-modal';

@NgModule({
  declarations: [
    GymAppPage,
    HeaderGymComponent,
    EjerciciosPage,
    EntrenamientosPage,
    ContactPage,
    EjercicioModalPage
  ],
  imports: [
    IonicPageModule.forChild(GymAppPage),
    SuperTabsModule
  ],
})
export class GymAppPageModule { }
