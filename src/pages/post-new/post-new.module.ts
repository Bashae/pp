import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostNewPage } from './post-new';

@NgModule({
  declarations: [
    PostNewPage,
  ],
  imports: [
    IonicPageModule.forChild(PostNewPage),
  ],
})
export class PostNewPageModule {}
