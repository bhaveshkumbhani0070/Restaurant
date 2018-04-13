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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyReservationsPage');
  }

}
