import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-our-events',
  templateUrl: 'our-events.html',
})
export class OurEventsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OurEventsPage');
  }
  // redirectMe(){
  //   this.navCtrl.push(ReserveTablePage);
  // }
  pushPage() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push('ReserveTablePage');
  }
}
