import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurReviewsPage } from './our-reviews';

@NgModule({
  declarations: [
    OurReviewsPage,
  ],
  imports: [
    IonicPageModule.forChild(OurReviewsPage),
  ],
})
export class OurReviewsPageModule {}
