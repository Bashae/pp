import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandingPage } from '../pages/landing/landing';
import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';
import { UserProvider } from '../providers/user/user';
import { GeoProvider } from '../providers/geo/geo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LandingPage;

  constructor(
    platform: Platform,
    public auth: AuthProvider,
    public geo: GeoProvider,
    public user: UserProvider,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      this.checkAuthState();
      this.hideScreens();
    });
  }

  async checkAuthState() {
    await this.auth.afAuth.authState.subscribe(user => {
      ( user === null ) ? this.unsetUser() : this.setUser(user);
    })
  }
  
  setUser(user) {
    this.auth.setUser(user)
    this.geo.setLocation()
    this.rootPage = HomePage
  }

  unsetUser() {
    this.auth.unsetUser()
    this.rootPage = LandingPage
  }

  hideScreens() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}

