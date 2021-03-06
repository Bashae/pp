import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingProvider } from '../loading/loading';
import { Geolocation } from '@ionic-native/geolocation';

import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import * as geofirex from 'geofirex';

@Injectable()
export class GeoProvider {
  geo = geofirex.init(firebase)
  points: Observable<any>
  radius = new BehaviorSubject(10)
  currentLocation = new BehaviorSubject({lat: null, lon: null});
  locationData = this.currentLocation.asObservable();
  currentLat: any = 0;
  currentLon: any = 0;
  currentGeopoint: any;

  constructor(
    public afs: AngularFirestore,
    public loader: LoadingProvider,
    public geolocation: Geolocation
  ) {
    this.currentLocation.subscribe(res => {
      this.currentLat = res.lat;
      this.currentLon = res.lon;
      this.currentGeopoint = this.getGeoPoint(res.lat, res.lon);
    })
  }

  async setLocation() {
    this.loader.showLoader();
    await this.geolocation.getCurrentPosition({timeout: 30000}).then(resp => {
      this.currentLocation.next({'lat': resp.coords.latitude, 'lon': resp.coords.longitude})
    }).catch(err => {
      console.log('some err');
      console.log(err);
    })
    this.loader.hideLoader();
  }

  trackLocation() {
    // this.subscription = this.geolocation.watchPosition();
    // let lastUpdate, currentUpdate;
    // lastUpdate = 0;
    // currentUpdate = 1;

    // setInterval(function() {
    //   currentUpdate++;
    // }, 15000);

    // this.subscription.subscribe(position => {
    //   if(lastUpdate !== currentUpdate) {
    //     lastUpdate = currentUpdate;
    //     this.setLocation(true);
    //   }
    // })
  }

  getGeoPoint(lat, lon) {
    return this.geo.point(lat, lon);
  }

  getNearbyStream(lat, lon) {
    const field = 'pos';
    let center = this.getGeoPoint(lat, lon);

    return this.points = this.radius.pipe(
      switchMap( r => {
        return this.geo.collection('st', ref =>
            ref.limit(15))
            .within(center, 10, field);
      })
    )
  }

  getNearbyActivePlayers(lat, lon) {
    const field = 'pos';
    let center = this.getGeoPoint(lat, lon);

    return this.points = this.radius.pipe(
      switchMap( r => {
        return this.geo.collection('users', ref =>
          ref.where('ac', '==', true)
            .limit(15))
            .within(center, 10, field);
      })
    )
  }
}
