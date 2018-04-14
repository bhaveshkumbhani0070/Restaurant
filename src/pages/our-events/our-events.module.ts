import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurEventsPage } from './our-events';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';

@NgModule({
  declarations: [
    OurEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(OurEventsPage),
    HeaderContentComponentModule
  ],
})
export class OurEventsPageModule {}
