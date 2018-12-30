import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingProvider } from '../loading/loading';
import { StreamItem } from '../../app/stream-item';

@Injectable()
export class PostProvider {
  streamCollection: AngularFirestoreCollection<StreamItem>;

  constructor(
    public afs: AngularFirestore,
    public storage: AngularFireStorage,
    public loader: LoadingProvider
  ) {
    this.streamCollection = this.afs.collection('st');
  }

  createNewPost(post: StreamItem, pos) {
    this.loader.showLoader();
    let _that = this;
    let tempPos = {
      'geohash': pos['hash'],
      'geopoint': pos['geoPoint']
    }

    let strData = JSON.parse(JSON.stringify(post));
    strData.pos = tempPos;
    let str = this.streamCollection.add(strData);

    str.then(function(data) {
      _that.loader.hideLoader();
    })
  }

  generateGuid() {
    var result, i, j;
    result = '';
    for(j=0; j<32; j++) {
      if( j == 8 || j == 12 || j == 16 || j == 20) 
        result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

  async uploadImage(uid, img) {
    let uuid = this.generateGuid();

    return this.storage.ref("/" + uid + "/" + uuid).putString(img, 'data_url');
  }

  // updateImageUrl(loc, url) {
  //   let newData = {
  //     im: [],
  //     r: [],
  //     b: []
  //   }

  //   if(data != undefined) { newData = data }
  //   newData.im.push(url);
  //   this.pageCollection.doc(loc).set(newData);
  //   this.updateProfileImage(loc, url);
  // }

}
