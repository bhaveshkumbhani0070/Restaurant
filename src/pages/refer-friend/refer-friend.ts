import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

/**
 * Generated class for the ReferFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refer-friend',
  templateUrl: 'refer-friend.html',
})
export class ReferFriendPage {
  header_data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private popoverCtrl: PopoverController) {
      this.header_data={ismenu:true,ishome:false,title:"REFER A FRIEND"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferFriendPage');
  }
  optionsPopover(event) {
    let popover = this.popoverCtrl.create('PopPage')
       popover.present({
          ev: event
       });
  }
}
