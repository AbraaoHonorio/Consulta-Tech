import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';

import { CalendarPage } from '../pages/calendar/calendar';
//import { ClientesPage } from '../pages/clientes/clientes';


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
  rootPage:string = 'LoginPage';
  appMenuItems: Array<MenuItem>;
  menuConfiguracao: MenuItem;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });

    this.appMenuItems = [
      {title: 'Home', component:'CalendarPage', icon: 'home'},
      {title: 'Atendimento', component:'CalendarPage', icon: 'clipboard'},
      {title: 'Consulta', component: 'ClientesPage', icon: 'contacts'},
      {title: 'Finaças', component: 'CalendarPage', icon: 'cash'},

    ];
    this.menuConfiguracao =  {title: 'Configuração', component: CalendarPage, icon: 'construct'};

    
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}

