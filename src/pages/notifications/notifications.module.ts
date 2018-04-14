import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';
@NgModule({
  declarations: [
    NotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsPage),
    HeaderContentComponentModule
  ],
})
export class NotificationsPageModule {}
