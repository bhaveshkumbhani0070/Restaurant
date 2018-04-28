import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

@IonicPage()
@Component({
  selector: 'page-our-events',
  templateUrl: 'our-events.html',
})
export class OurEventsPage {

  header_data:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private popoverCtrl: PopoverController,
    public restaurantProvider : RestaurantProvider
  ) {
      this.header_data={ismenu:true,ishome:false,title:"OUR EVENTS"};
      this.getEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OurEventsPage');
  }
  // redirectMe(){
  //   this.navCtrl.push(ReserveTablePage);
  // }
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

  getEvents(){
    this.restaurantProvider.getEvents()
    .subscribe(
    data =>{
      console.log('getEvents',data);
    },
    error =>  {
      console.log('Error',error);
    });
  }
}
