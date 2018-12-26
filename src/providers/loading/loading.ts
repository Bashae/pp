import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingProvider {
  loader: any;

  constructor(
    public loadingCtrl: LoadingController
  ) {}

  showLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Receiving Location..."
    });
    this.loader.present();
  }

  hideLoader() {
    this.loader.dismiss();
  }

}
