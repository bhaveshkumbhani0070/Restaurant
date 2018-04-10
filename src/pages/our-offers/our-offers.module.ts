import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurOffersPage } from './our-offers';

@NgModule({
  declarations: [
    OurOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(OurOffersPage),
  ],
})
export class OurOffersPageModule {}
