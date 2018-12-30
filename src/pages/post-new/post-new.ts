import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PostProvider } from '../../providers/post/post';
import { StreamItem } from '../../app/stream-item';
import { UserProvider } from '../../providers/user/user';
import { GeoProvider } from '../../providers/geo/geo';

@IonicPage()
@Component({
  selector: 'page-post-new',
  templateUrl: 'post-new.html',
})
export class PostNewPage {
  @ViewChild(Slides) slides: Slides;
  post = new StreamItem;

  constructor(
    private camera: Camera,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public geo: GeoProvider,
    public posts: PostProvider,
    public user: UserProvider
  ) {
    this.post.u = {
      im: "",
      id: "",
      n: ""
    }
    this.post.pos = {}
  }

  addImage() {
    const options: CameraOptions = {
      correctOrientation: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.posts.uploadImage(this.user.currentUser.id, base64Image).then(res => 
      res.ref.getDownloadURL().then(url => {
        this.post.im = url;
        this.nextSlide();
      }))
    }, (err) => {
     // Handle error
    });
  }

  nextSlide() {
    this.slides.slideNext();
  }

  submitPost() {
    this.post.u.im = this.user.currentUser.im;
    this.post.u.id = this.user.currentUser.ui;
    this.post.u.n = this.user.currentUser.n;

    this.posts.createNewPost(this.post, this.geo.currentGeopoint);
    this.navCtrl.pop();
  }

}
