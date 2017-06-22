import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ChimeApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupBrandPage } from "../pages/login/signup-brand/signup-brand";

@NgModule({
  declarations: [
    ChimeApp,
    LoginPage,
    SignupBrandPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ChimeApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChimeApp,
    LoginPage,
    SignupBrandPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
