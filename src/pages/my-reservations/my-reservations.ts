import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-my-reservations',
  templateUrl: 'my-reservations.html',
})
export class MyReservationsPage {

  reservation:string="upcoming"
  header_data:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:AuthProvider) {
      this.header_data={ismenu:true,ishome:false,title:"MY RESERVATIONS"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyReservationsPage');
  }

}
