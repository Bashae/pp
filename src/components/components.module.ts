import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserListComponent } from './user-list/user-list';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { MapContainerComponent } from './map-container/map-container';
import { OnlineListComponent } from './online-list/online-list';
import { StreamComponent } from './stream/stream';
import { CardComponent } from './card/card';

@NgModule({
	declarations: [HeaderComponent,
    UserListComponent,
    MapContainerComponent,
    OnlineListComponent,
    StreamComponent,
    CardComponent],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [HeaderComponent,
	UserListComponent,
    MapContainerComponent,
    OnlineListComponent,
    StreamComponent,
    CardComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
