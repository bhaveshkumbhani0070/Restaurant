import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-our-offers',
  templateUrl: 'our-offers.html',
})
export class OurOffersPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OurOffersPage');
  }

  pushPage() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push('ReserveTablePage');
  }
}
