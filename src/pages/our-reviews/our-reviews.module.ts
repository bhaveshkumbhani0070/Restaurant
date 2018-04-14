import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurReviewsPage } from './our-reviews';
import {HeaderContentComponentModule} from '../../components/header-content/header-content.module';

@NgModule({
  declarations: [
    OurReviewsPage,
  ],
  imports: [
    IonicPageModule.forChild(OurReviewsPage),
    HeaderContentComponentModule
  ],
})
export class OurReviewsPageModule {}
