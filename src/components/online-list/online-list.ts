import { Component } from '@angular/core';
import { GeoProvider } from '../../providers/geo/geo';
import { NavController } from 'ionic-angular';
import { UserPage } from '../../pages/user/user';

@Component({
  selector: 'online-list',
  templateUrl: 'online-list.html'
})
export class OnlineListComponent {
  location: any;
  nearbyPlayers: any;

  constructor(
    public geo: GeoProvider,
    public navCtrl: NavController
  ) {
    this.location = this.geo.locationData.subscribe(loc => {
      this.updateUsers(loc);
    })
  }

  updateUsers(loc) {
    if ( loc.lat !== null ) {
      this.geo.getNearbyActivePlayers(loc.lat, loc.lon).subscribe(res => {
        this.nearbyPlayers = res;
      })
    }
  }

  goToUserPage(player) {
    this.navCtrl.push(UserPage, {user: player});
  }
}
