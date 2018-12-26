import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandingPage } from '../pages/landing/landing';
import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LandingPage;

  constructor(
    platform: Platform,
    public auth: AuthProvider,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      this.auth.afAuth.authState.subscribe(user => {
        if ( user === null ) {
          this.rootPage = LandingPage;
          this.auth.unsetUser();
        } else {
          this.rootPage = HomePage;
          this.auth.setUser(user);
        }
      })
    });
  }

  hideScreens() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}

