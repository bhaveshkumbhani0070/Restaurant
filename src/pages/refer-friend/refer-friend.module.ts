import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferFriendPage } from './refer-friend';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';
@NgModule({
  declarations: [
    ReferFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(ReferFriendPage),
    HeaderContentComponentModule
  ],
})
export class ReferFriendPageModule {}
