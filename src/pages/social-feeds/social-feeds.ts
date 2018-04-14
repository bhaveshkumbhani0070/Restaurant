import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SocialFeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-feeds',
  templateUrl: 'social-feeds.html',
})
export class SocialFeedsPage {
  header_data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.header_data={ismenu:true,ishome:false,title:"SOCIAL FEEDS"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialFeedsPage');
  }
  
}
