import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurMenuPage } from './our-menu';

@NgModule({
  declarations: [
    OurMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(OurMenuPage),
  ],
})
export class OurMenuPageModule {}
