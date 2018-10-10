import { Calendar1Page } from './../pages/calendar1/calendar1';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarPage } from '../pages/calendar/calendar';


export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage:string = 'HomePage';
  rootPage:any = CalendarPage;
  appMenuItems: Array<MenuItem>;
  menuConfiguracao: MenuItem;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.appMenuItems = [
      {title: 'Home', component:'HomePage', icon: 'home'},
      {title: 'Atendimento', component: Calendar1Page, icon: 'clipboard'},
      {title: 'Clientes', component: Calendar1Page, icon: 'contacts'},
      {title: 'Finaças', component: Calendar1Page, icon: 'cash'},
    ];
    this.menuConfiguracao =  {title: 'Configuração', component: Calendar1Page, icon: 'construct'};

    
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

