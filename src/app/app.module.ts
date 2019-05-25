import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth'
import {AuthService} from './auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyD3z_Igs8thxTScGPxGYsPR6hdhXm4Gke8",
  authDomain: "fatec-ipi-noite-notable-a7851.firebaseapp.com",
  databaseURL: "https://fatec-ipi-noite-notable-a7851.firebaseio.com",
  projectId: "fatec-ipi-noite-notable-a7851",
  storageBucket: "fatec-ipi-noite-notable-a7851.appspot.com",
  messagingSenderId: "646185512746",
  appId: "1:646185512746:web:e01df2389e491660"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
