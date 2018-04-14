import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TackAwayPage } from './tack-away';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';

@NgModule({
  declarations: [
    TackAwayPage,
  ],
  imports: [
    IonicPageModule.forChild(TackAwayPage),
    HeaderContentComponentModule
  ],
})
export class TackAwayPageModule {}
