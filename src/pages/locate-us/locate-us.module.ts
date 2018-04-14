import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocateUsPage } from './locate-us';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';
@NgModule({
  declarations: [
    LocateUsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocateUsPage),
    HeaderContentComponentModule
  ],
})
export class LocateUsPageModule {}
