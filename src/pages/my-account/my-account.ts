import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  model: any={};
  loading:any;
  header_data:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController, 
    private loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    public restaurantProvider : RestaurantProvider 
  ) {
    this.header_data={ismenu:true,ishome:false,title:"MY ACCOUNT"};
    this.getCustomer();

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestAccountPage');
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: ''
    });

    this.loading.present();

  }

  presentToast(data) {
    let toast = this.toastCtrl.create({
      message: data,
      duration: 4000,
      position: 'bottom',
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  getCustomer(){
    this.restaurantProvider.getCustomer()
    .subscribe(
    data =>{
      console.log('getCustomer',data);
       this.model=data["data"];
    },
    error =>  {
      console.log('Error',error);
    });
  }
  updateAcc(){
    console.log('updateAcc');
    this.restaurantProvider.updateCustomer(this.model)
      .subscribe(
        data=>{
          console.log('data',data);
          this.presentToast(data["message"]);
        },
        error=>{
          console.log('Error',error);
        });
  }
}
