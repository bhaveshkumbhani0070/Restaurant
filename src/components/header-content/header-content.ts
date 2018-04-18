import { Component,Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';


@Component({
  selector: 'header-content',
  templateUrl: 'header-content.html'
})
export class HeaderContentComponent {

  header_data: any;
  
  constructor(  private popoverCtrl: PopoverController) {
  }
  @Input()
  set header(header_data: any) {
    this.header_data=header_data;
  }
  get header() {
    return this.header_data;
  }

  optionsPopover(event) {
    console.log('event',event);
    let popover = this.popoverCtrl.create('PopPage')
    popover.present({
        ev: event
    });
  }

}
