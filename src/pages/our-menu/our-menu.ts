import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OurMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-our-menu',
  templateUrl: 'our-menu.html',
})
export class OurMenuPage {

  menu:string="food";
  header_data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.header_data={ismenu:true,ishome:false,title:"OUR MENU"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OurMenuPage');
  }

}
