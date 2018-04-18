
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    // , tabComponent: 'NotificationsPage', index: 3,
    { title: 'Reserve Table', pageName: 'ReserveTablePage',index:1,  icon: '' },
    { title: 'My Reservations', pageName: 'MyReservationsPage', index:4,icon: 'calendar' },
    { title: 'My Account', pageName: 'MyAccountPage', index:5, icon: 'md-person-add' },
    { title: 'Our Offers', pageName: 'OurOffersPage',index:6,  icon: 'md-document' },
    { title: 'Notifications', pageName: 'NotificationsPage',index:3,  icon: 'md-notifications-outline' },
    { title: 'Our Events', pageName: 'OurEventsPage', index:7, icon: 'md-calendar' },
    { title: 'Social Feeds', pageName: 'SocialFeedsPage', index:8, icon: 'md-paper' },
    { title: 'Refer A Friend', pageName: 'ReferFriendPage', index:9, icon: 'md-share' },
    { title: 'Locate Us', pageName: 'LocateUsPage', index:2, icon: 'md-pin' }
  ];
 
  constructor(public navCtrl: NavController, public auth: AuthProvider) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      console.log('getactive');
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      console.log('nav push');
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.push(page.pageName, params);
    }
  }

 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0]; 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  openLoginPage(){
    this.nav.push('LoginPage');
  }
 
 
}