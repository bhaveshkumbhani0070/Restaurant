import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

@IonicPage()
@Component({
  selector: 'page-our-reviews',
  templateUrl: 'our-reviews.html',
})
export class OurReviewsPage {

  header_data:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private popoverCtrl: PopoverController,
    public restaurantProvider : RestaurantProvider
  ) {
      this.header_data={ismenu:true,ishome:false,title:"CUSTOMER REVIEWS"};
      this.getReviews();
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

  getReviews(){
    this.restaurantProvider.getReviews()
    .subscribe(
    data =>{
      console.log('getReviews',data);
    },
    error =>  {
      console.log('Error',error);
    });
  }

}
