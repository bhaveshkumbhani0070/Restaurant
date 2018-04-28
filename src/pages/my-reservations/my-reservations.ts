import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

@IonicPage()
@Component({
  selector: 'page-my-reservations',
  templateUrl: 'my-reservations.html',
})
export class MyReservationsPage {

  reservation:string="upcoming"
  header_data:any;
  upData:any;
  history:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:AuthProvider,
    public restaurantProvider : RestaurantProvider
  ) {
      this.header_data={ismenu:true,ishome:false,title:"MY RESERVATIONS"};
      this.getBooking();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyReservationsPage');
  }

  getBooking(){
    this.restaurantProvider.getBooking()
    .subscribe(
    data =>{
      console.log('getBooking',data);
      this.upData=data["data"];
    },
    error =>  {
      console.log('Error',error);
    });
  }


}
