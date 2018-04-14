import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-our-offers',
  templateUrl: 'our-offers.html',
})
export class OurOffersPage {

  header_data:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private popoverCtrl: PopoverController) {
      this.header_data={ismenu:true,ishome:false,title:"OUR OFFERS"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OurOffersPage');
  }

  pushPage() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push('ReserveTablePage');
  }
  optionsPopover(event) {
    let popover = this.popoverCtrl.create('PopPage')
       popover.present({
          ev: event
       });
  }
}
