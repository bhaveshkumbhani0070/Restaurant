import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Component } from '@angular/core';
import { IonicPage, PopoverController, ToastController } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
// LoadingController
@IonicPage()
@Component({
  selector: 'page-reserve-table',
  templateUrl: 'reserve-table.html',
})
export class ReserveTablePage {

  data: any = [];
  itemExpandHeight: number = 100;
  errorMessage: string;
  newUrl:string;
  loading:any;
  model:any={};  
  header_data:any;

  constructor(
    private toastCtrl: ToastController ,
    public restaurantProvider : RestaurantProvider,
    private sanitizer:DomSanitizer, 
    // private loadingCtrl: LoadingController, 
    private popoverCtrl: PopoverController
  ) {
    this.getMenu();
    this.getBooking();
    this.model = {
      name: '',
      seats: '',
      date: '',
      time:'',
      requirement:''
    }
    this.header_data={ismenu:true,ishome:false,title:"RESERVE TABLE"};
    
  }

  ionViewDidLoad() {
    this.showLoader(); 
  }

  optionsPopover(event) {
    let popover = this.popoverCtrl.create('PopPage')
       popover.present({
          ev: event
       });
  }
  expandedItem:boolean= false;
  expandItem(){
    return this.expandedItem=!this.expandedItem;
  }

  getMenu(){
    // this.airplaneMenu.getAirplaneMenu()
    // .subscribe(
    //   menuItems =>{
    //     this.loading.dismiss();       
    //     this.data = menuItems;
    //     this.data.forEach(function(e) { e.expanded =  false });
        
    //   },
    //   error =>  {
    //     this.loading.dismiss();  
    //     this.presentToast();
    //     this.errorMessage = <any>error
    //   });
  }

  sanitize(url:string){
    let newUrl = 'http://13.127.126.229' + url ;
    return this.sanitizer.bypassSecurityTrustUrl(newUrl);
  }
  bookTable(){
    console.log('book',this.model);
    this.restaurantProvider.bookTable(this.model)
      .subscribe(
        data=>{
          console.log('data',data);
        },
        error=>{
          console.log('Error',error);
        });
  }
  getBooking(){
      this.restaurantProvider.getBooking()
      .subscribe(
      data =>{
        console.log('data',data);
      },
      error =>  {
        console.log('Error',error);
      });
  }
  showLoader(){
    // this.loading = this.loadingCtrl.create({
    //     content: ''
    // });

    // this.loading.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Something went wrong try again!',
      duration: 4000,
      position: 'bottom',
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
