import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurEventsPage } from './our-events';

@NgModule({
  declarations: [
    OurEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(OurEventsPage),
  ],
})
export class OurEventsPageModule {}
