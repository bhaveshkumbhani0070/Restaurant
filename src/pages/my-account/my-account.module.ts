import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAccountPage } from './my-account';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';
@NgModule({
  declarations: [
    MyAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAccountPage),
    HeaderContentComponentModule
  ],
})
export class MyAccountPageModule {}
