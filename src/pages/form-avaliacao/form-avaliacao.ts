import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the FormAvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-avaliacao',
  templateUrl: 'form-avaliacao.html',
})
export class FormAvaliacaoPage {

  
  public form: FormGroup;
  @ViewChild('myInput') myInput: ElementRef;


  imageUrl: string = 'https://github.com/yannbf/ionic3-components/blob/master/src/assets/img/profile/profile-cover.jpg?raw=true';

  public user = {
    name: 'Paula Bolliger',
    profileImage: 'https://yannbf.github.io/ionic3-components/assets/img/avatar/girl-avatar.png',
    coverImage: 'https://yannbf.github.io/ionic3-components/assets/img/avatar/girl-avatar.png',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  };



  constructor(private fb: FormBuilder) {
 
    
    this.form = this.fb.group({
      historicoDoenca: [
        ""
      ],
      queixaPrincipal: [
        "",
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(160),
          Validators.required
        ]),
      ],
      medicamentoEmUso: [
        ""
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormAvaliacaoPage');

  }


}
