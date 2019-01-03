import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Marker
} from '@ionic-native/google-maps';

import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeoProvider } from '../../providers/geo/geo';

@Component({
  selector: 'map-container',
  templateUrl: 'map-container.html'
})
export class MapContainerComponent {
  @Input() players: any;
  public map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    public geo: GeoProvider
  ) {}

  ngAfterViewInit() {
    // if(this.isLocatorActive) {
    //   this.location.subscribe(res => {
    //     if(res.lat !== null){
    //       this.makeMap(res.lat, res.lon);
    //       this.getNearbyPlayers();
    //     }
    //   })
    // }

    this.makeMap();
  }

  ngOnChanges() {
    this.addPlayersToMap(this.players);
  }

  addPlayersToMap(players) {
    console.log('what are the players');
    console.log(players);
  }

  makeMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
          target: {
            lat: 35.5012683,
            lng: -80.8609436
          },
          zoom: 14
        }
    };

    this.map = GoogleMaps.create('map', mapOptions);
  }

  setMarkerColor(team) {
    if(team === 'Mystic') {return 'blue';}
    if(team === 'Valor') {return 'red';}
    if(team === 'Instinct') {return 'yellow';}
  }

  placeMarkers(players) {
    players.forEach(player => {
      let marker: Marker = this.map.addMarkerSync({
        title: player.un,
        icon: this.setMarkerColor(player.t),
        position: {
          lat: player.pos.geopoint.latitude,
          lng: player.pos.geopoint.longitude
        }
      });
      
      // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      //   alert('clicked');
      //   some sort of ui interaction with person clicked on
      // });
    });
  }

}
