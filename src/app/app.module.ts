import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { OneSignal } from '@ionic-native/onesignal';

import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { AirplaneMenuProvider } from '../providers/airplane-menu/airplane-menu';
import { AuthProvider } from '../providers/auth/auth';
import { OneSignlProvider } from '../providers/one-signl/one-signl';
import { RestaurantProvider } from '../providers/restaurant/restaurant';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OneSignal,
    AirplaneMenuProvider,
    AuthProvider,
    OneSignlProvider,
    RestaurantProvider
  ]
})
export class AppModule {}
