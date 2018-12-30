import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandingPage } from '../pages/landing/landing';
import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';
import { UserProvider } from '../providers/user/user';
import { GeoProvider } from '../providers/geo/geo';
import { ProfilePage } from '../pages/profile/profile';
import { DonatePage } from '../pages/donate/donate';
import { FeedbackPage } from '../pages/feedback/feedback';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage:any = LandingPage;

  constructor(
    platform: Platform,
    public auth: AuthProvider,
    public events: Events,
    public geo: GeoProvider,
    public user: UserProvider,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      this.checkAuthState();
      this.hideScreens();
      this.setPageEvents();
    });
  }

  async checkAuthState() {
    await this.auth.afAuth.authState.subscribe(user => {
      ( user === null ) ? this.unsetUser() : this.setUser(user);
    })
  }

  setPageEvents() {
    this.events.subscribe('page:profile', () => {
      this.nav.push(ProfilePage, {player: this.user.currentUser});
    })
    this.events.subscribe('page:donate', () => {
      this.rootPage = DonatePage;
    })
    this.events.subscribe('page:feedback', () => {
      this.rootPage = FeedbackPage;
    })
    this.events.subscribe('page:home', () => {
      this.rootPage = HomePage;
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

