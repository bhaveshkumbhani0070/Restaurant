import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyReservationsPage } from './my-reservations';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';

@NgModule({
  declarations: [
    MyReservationsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyReservationsPage),
    HeaderContentComponentModule
  ],
})
export class MyReservationsPageModule {}
