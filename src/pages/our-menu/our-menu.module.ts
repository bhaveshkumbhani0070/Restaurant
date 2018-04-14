import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurMenuPage } from './our-menu';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';

@NgModule({
  declarations: [
    OurMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(OurMenuPage),
    HeaderContentComponentModule
  ],
})
export class OurMenuPageModule {}
