import { Component } from '@angular/core';
import { GeoProvider } from '../../providers/geo/geo';

@Component({
  selector: 'stream',
  templateUrl: 'stream.html'
})
export class StreamComponent {
  location: any;
  streamItems: any;

  constructor(
    public geo: GeoProvider
  ) {
    this.location = this.geo.locationData.subscribe(loc => {
      this.updateStream(loc);
    })
  }

  updateStream(loc) {
    if ( loc.lat !== null ) {
      this.geo.getNearbyStream(loc.lat, loc.lon).subscribe(res => {
        this.streamItems = res;
      })
    }
  }
}
