import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurOffersPage } from './our-offers';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';

@NgModule({
  declarations: [
    OurOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(OurOffersPage),
    HeaderContentComponentModule
  ],
})
export class OurOffersPageModule {}
