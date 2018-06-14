import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GymAppPage } from './gym-app';

@NgModule({
  declarations: [
    GymAppPage,
  ],
  imports: [
    IonicPageModule.forChild(GymAppPage),
  ],
})
export class GymAppPageModule {}
