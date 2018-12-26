import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(
    public auth: AuthProvider
  ) {}

  logUserOut() {
    this.auth.logOut();
  }

}
