import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReserveTablePage } from './reserve-table';

@NgModule({
  declarations: [
    ReserveTablePage,
  ],
  imports: [
    IonicPageModule.forChild(ReserveTablePage),
  ],
})
export class ReserveTablePageModule {}
