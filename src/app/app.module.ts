import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InputsPage } from '../pages/inputs/inputs';
import { ButtonPage } from '../pages/button/button';
import { BoasVindasPage } from '../pages/boas-vindas/boas-vindas';
import { BadgePage } from '../pages/badge/badge';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InputsPage,
    ButtonPage,
    BoasVindasPage,
    BadgePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InputsPage,
    ButtonPage,
    BoasVindasPage,
    BadgePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
