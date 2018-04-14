import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

/**
 * Generated class for the LocateUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locate-us',
  templateUrl: 'locate-us.html',
})
export class LocateUsPage {
  header_data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private popoverCtrl: PopoverController) {
      this.header_data={ismenu:true,ishome:false,title:"LOCATE US"}; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocateUsPage');
  }
  optionsPopover(event) {
    let popover = this.popoverCtrl.create('PopPage')
       popover.present({
          ev: event
       });
  }
}
