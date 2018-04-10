import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialFeedsPage } from './social-feeds';

@NgModule({
  declarations: [
    SocialFeedsPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialFeedsPage),
  ],
})
export class SocialFeedsPageModule {}
