
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
    { title: 'Reserve-Table', pageName: 'ReserveTablePage',  icon: 'md-jet' },
    { title: 'My Reservations', pageName: 'MyReservationsPage', icon: 'calendar' },
    { title: 'My Account', pageName: 'MyAccountPage', icon: 'md-notifications-outline' },
    { title: 'Our Offers', pageName: 'OurOffersPage',  icon: 'md-star-outline' },
    { title: 'Notifications', pageName: 'NotificationsPage',  icon: 'md-document' },
    { title: 'Our Events', pageName: 'OurEventsPage',  icon: 'md-notifications-outline' },
    { title: 'Social Feeds', pageName: 'SocialFeedsPage',  icon: 'md-star-outline' },
    { title: 'Refer A Friend', pageName: 'ReferFriendPage',  icon: 'md-document' },
    { title: 'Locate Us', pageName: 'LocateUsPage',  icon: 'md-document' }
  ];


  
 
  constructor(public navCtrl: NavController, public auth: AuthProvider) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.push(page.pageName, params);
    }
  }

  openLoginPage(){
    this.nav.push('LoginPage');
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
 
}