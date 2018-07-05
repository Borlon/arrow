import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArcheryAppPage } from '../pages/archery-app/archery-app';
import { GymAppPage } from '../pages/gym-app/gym-app';
import { HeaderGymComponent } from '../components/header-gym/header-gym';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { EjercicioModalPage } from '../pages/gym-app/ejercicios/ejercicio-modal/ejercicio-modal';
import { GymServiceProvider } from '../providers/gym-service/gym-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArcheryAppPage,
    GymAppPage,
    HeaderGymComponent,
    EjercicioModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArcheryAppPage,
    GymAppPage,
    HeaderGymComponent,
    EjercicioModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    Camera,
    FilePath,
    File,
    SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GymServiceProvider
  ]
})
export class AppModule { }
