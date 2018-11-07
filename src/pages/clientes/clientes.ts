import { Client } from './../../app/models/client';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ClientService } from '../../app/services/client-service.service';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ClientesPage'
})
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  public items:Client[] = [];
 /* items = [
    {
      imageUrl: 'assets/img/lists/stadium.jpg',
      title: 'First Cup',
      place: 'Madison Square',
      date: '05/06/2016'
    },
    {
      imageUrl: 'assets/img/lists/stadium-3.png',
      title: 'Season',
      place: 'Hooli',
      date: '15/03/2016'
    },
    {
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: '2nd Season',
      place: 'Castelão',
      date: '05/12/2015'
    },
  ];*/

  constructor(public navCtrl: NavController, public serviceClient: ClientService) {
    this.serviceClient.getClients().subscribe(res => {
      this.items = res;
      console.log('ionViewDidLoad ClientesPage');
      console.log(JSON.stringify(res));
      // tslint:disable-next-line:no-unused-expression
    }), err => {
      console.log('Error Occured ' + err);
    };
  }

  delete(item) {
    alert('Deleted ' + item.title);
  }

  viewComments(item) {
    alert('Viewing comments of ' + item.title);
  }

  viewPlayers(item) {
    alert('Viewing players of ' + item.title);
  }

  ionViewDidLoad() {

    this.serviceClient.getClients().subscribe(res => {
      this.items = res;
      console.log('ionViewDidLoad ClientesPage');
      console.log(JSON.stringify(res));
      // tslint:disable-next-line:no-unused-expression
    }), err => {
      console.log('Error Occured ' + err);
    };
  }

}
