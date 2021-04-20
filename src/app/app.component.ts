import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InputsPage } from '../pages/inputs/inputs';
import { ButtonPage } from '../pages/button/button';
import { BadgePage } from '../pages/badge/badge';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Inputs', component: InputsPage },
      { title: 'Button', component: ButtonPage },
      { title: 'Badge', component: BadgePage }
    ];
  }

  openPage(page: any): void {
    this.nav.push(page.component);
  }
}

