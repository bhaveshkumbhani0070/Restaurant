import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialFeedsPage } from './social-feeds';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';

@NgModule({
  declarations: [
    SocialFeedsPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialFeedsPage),
    HeaderContentComponentModule
  ],
})
export class SocialFeedsPageModule {}
