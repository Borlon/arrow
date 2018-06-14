import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArcheryAppPage } from './archery-app';

@NgModule({
  declarations: [
    ArcheryAppPage,
  ],
  imports: [
    IonicPageModule.forChild(ArcheryAppPage),
  ],
  exports: [
    ArcheryAppPage
  ]
})
export class ArcheryAppPageModule {}
