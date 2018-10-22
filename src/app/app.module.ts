import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";

import { Calendar1Page } from '../pages/calendar1/calendar1'
import { Calendar2Page } from '../pages/calendar2/calendar2'
import { CalendarPage } from '../pages/calendar/calendar';
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LoginPage } from './../pages/login/login';
import { ResultPage } from '../pages/result/result';
import { FormAtendimentoPage } from '../pages/form-atendimento/form-atendimento';
import { UsuarioPage } from '../pages/usuario/usuario';
import { TakePicturePage } from '../pages/take-picture/take-picture';
import { BrMaskerModule } from 'brmasker-ionic-3';

// Import your library
registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    MyApp,
    CalendarComponent,
    Calendar1Page,
    Calendar2Page,
    CalendarPage,
    LoginPage,
    ResultPage,
    FormAtendimentoPage,
    UsuarioPage,
    TakePicturePage,

  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp, {}, {
      
      links: [
       { component: LoginPage, name: 'Login', segment: 'login' },
       { component: CalendarPage, name: 'Home', segment: 'home' },
       { component: ResultPage, name: 'Result', segment: 'result' },
       { component: FormAtendimentoPage, name: 'Atendimento', segment: 'atendimento' },
       { component: UsuarioPage, name: 'Usuario', segment: 'usuario' },

      ]
    }),    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarComponent,
    Calendar1Page,
    Calendar2Page,
    CalendarPage,
    LoginPage,
    ResultPage,
    FormAtendimentoPage,
    UsuarioPage,
    TakePicturePage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: LOCALE_ID, useValue: 'pt' },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CalendarComponent
  ]
})
export class AppModule {}
