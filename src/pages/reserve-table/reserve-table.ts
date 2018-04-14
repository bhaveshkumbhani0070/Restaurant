import { AirplaneMenuProvider } from '../../providers/airplane-menu/airplane-menu';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, PopoverController, ToastController } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the ReserveTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    public airplaneMenu: AirplaneMenuProvider,
    private sanitizer:DomSanitizer, 
    private loadingCtrl: LoadingController, 
    private popoverCtrl: PopoverController
  ) {
    this.getMenu()
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
    // this.data.map((listItem) => {
    //     if(item == listItem){
    //         listItem.expanded = !listItem.expanded;
    //     } else {
    //         listItem.expanded = false;
    //     }
    //     return listItem;
    // });

  }

  getMenu(){
    this.airplaneMenu.getAirplaneMenu()
    .subscribe(
      menuItems =>{
        this.loading.dismiss()        
        this.data = menuItems;
        this.data.forEach(function(e) { e.expanded =  false });
        
      },
      error =>  {
        this.loading.dismiss()  
        this.presentToast();
        this.errorMessage = <any>error
      });
  }

  sanitize(url:string){
    let newUrl = 'http://13.127.126.229' + url ;
    return this.sanitizer.bypassSecurityTrustUrl(newUrl);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: ''
    });

    this.loading.present();
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
