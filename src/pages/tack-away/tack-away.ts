import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,  PopoverController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the TackAwayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tack-away',
  templateUrl: 'tack-away.html',
})
export class TackAwayPage {

  header_data:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public auth: AuthProvider,
    private popoverCtrl: PopoverController
  ) {
    this.header_data={ismenu:true,ishome:false,title:"TAKE AWAY ORDER"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TackAwayPage');
  }
  optionsPopover(event) {
    let popover = this.popoverCtrl.create('PopPage')
       popover.present({
          ev: event
       });
  }

  pushPage() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push('LoginPage');
  }

}
