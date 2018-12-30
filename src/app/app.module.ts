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
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { GoogleMaps } from '@ionic-native/google-maps';
import { StreamProvider } from '../providers/stream/stream';
import { UsersProvider } from '../providers/users/users';
import { LoadingProvider } from '../providers/loading/loading';
import { Geolocation } from '@ionic-native/geolocation';
import { PostNewPage } from '../pages/post-new/post-new';
import { PostProvider } from '../providers/post/post';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ChatProvider } from '../providers/chat/chat';
import { ChatUserPage } from '../pages/chat-user/chat-user';

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
    ChatUserPage,
    HomePage,
    LandingPage,
    LoginPage,
    PostNewPage,
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
    ChatUserPage,
    HomePage,
    LandingPage,
    LoginPage,
    PostNewPage,
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
    AngularFireStorage,
    AuthProvider,
    Camera,
    GeoProvider,
    Geolocation,
    GoogleMaps,
    UserProvider,
    StreamProvider,
    UsersProvider,
    LoadingProvider,
    PostProvider,
    ChatProvider
  ]
})
export class AppModule {}
