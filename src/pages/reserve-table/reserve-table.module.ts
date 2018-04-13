import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReserveTablePage } from './reserve-table';
import { AccordingComponentModule } from '../../components/accordion/accordion.module';

@NgModule({
  declarations: [
    ReserveTablePage,
  ],
  imports: [
    IonicPageModule.forChild(ReserveTablePage),
    AccordingComponentModule
  ],
})
export class ReserveTablePageModule {}
