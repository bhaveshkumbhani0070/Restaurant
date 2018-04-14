import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
/**
 * Generated class for the OurReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-our-reviews',
  templateUrl: 'our-reviews.html',
})
export class OurReviewsPage {

  header_data:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private popoverCtrl: PopoverController) {
      this.header_data={ismenu:true,ishome:false,title:"CUSTOMER REVIEWS"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OurReviewsPage');
  }
  optionsPopover(event) {
    let popover = this.popoverCtrl.create('PopPage')
       popover.present({
          ev: event
       });
  }

}
