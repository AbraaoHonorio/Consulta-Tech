import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  eventData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.eventData = localStorage.getItem('EventData');
  }

  ionViewWillLoad() {
   
  }

  homePage(){
   window.location.assign('#/home'); 
   
  }



}
