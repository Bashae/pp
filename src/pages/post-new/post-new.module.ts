import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostNewPage } from './post-new';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PostNewPage,
  ],
  imports: [
    IonicPageModule.forChild(PostNewPage),
    ComponentsModule
  ],
})
export class PostNewPageModule {}
