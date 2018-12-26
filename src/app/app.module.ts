import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { GeoProvider } from '../providers/geo/geo';
import { UserProvider } from '../providers/user/user';
import { ComponentsModule } from '../components/components.module';
import { LandingPage } from '../pages/landing/landing';
import { ProfilePage } from '../pages/profile/profile';
import { UserPage } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';

// Firebase and Angularfire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { GoogleMaps } from '@ionic-native/google-maps';

export const firebaseConfig = {
  apiKey: "AIzaSyC_f0a9UhqZniUM87FtEKp32FbDJXI7wj8",
  authDomain: "pogo-pal-1532794775743.firebaseapp.com",
  databaseURL: "https://pogo-pal-1532794775743.firebaseio.com",
  projectId: "pogo-pal-1532794775743",
  storageBucket: "pogo-pal-1532794775743.appspot.com",
  messagingSenderId: "530444738525"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    LoginPage,
    ProfilePage,
    RegistrationPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    LoginPage,
    ProfilePage,
    RegistrationPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireModule,
    AngularFireAuth,
    AngularFirestore,
    AuthProvider,
    GeoProvider,
    GoogleMaps,
    UserProvider
  ]
})
export class AppModule {}
