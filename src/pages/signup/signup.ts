import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  header_data:any;
  model: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.header_data={ismenu:true,ishome:false,title:"SIGNUP"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  sendOTP(){
    
  }
}
