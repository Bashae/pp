import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { Events } from 'ionic-angular';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  locatorActive: boolean = true;

  constructor(
    public auth: AuthProvider,
    public user: UserProvider,
    public events: Events
  ) {}

  goToCurrentUserProfile() {
    this.events.publish('page:profile');
  }

  toggleLocator() {
    this.locatorActive = !this.locatorActive;
  }

  logUserOut() {
    this.auth.logOut();
  }

}
