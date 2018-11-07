import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { SplashScreen } from '@ionic-native/splash-screen';
//import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";


import { CalendarPage } from '../pages/calendar/calendar';
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
//import { LoginPage } from './../pages/login/login';
//import { ResultPage } from '../pages/result/result';
import { FormAtendimentoPage } from '../pages/form-atendimento/form-atendimento';
import { UsuarioPage } from '../pages/usuario/usuario';
//import { TakePicturePage } from '../pages/take-picture/take-picture';
import { BrMaskerModule } from 'brmasker-ionic-3';
//import { ClientesPage } from '../pages/clientes/clientes';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client-service.service';
// Import your library
registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    MyApp,
  //  CalendarComponent,
    //CalendarPage,
   // LoginPage,
   // ResultPage,
  //FormAtendimentoPage,
  //  UsuarioPage,
   // TakePicturePage,
  //  ClientesPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, { preloadModules: true })

   /* IonicModule.forRoot(MyApp, { mode: 'md', preloadModules: true}, {
    links: [
      { component: LoginPage, name: 'Login', segment: 'login' },
      { component: CalendarPage, name: 'Home', segment: 'home' },
      { component: ResultPage, name: 'Result', segment: 'result' },
      { component: FormAtendimentoPage, name: 'Atendimento', segment: 'atendimento' },
      { component: UsuarioPage, name: 'Usuario', segment: 'usuario' },
      { component: 'ClientesPage', name: 'Cliente', segment: 'clientes' },
    ]
  }),  */  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //CalendarComponent,
   // CalendarPage,
  //  LoginPage,
   // ResultPage,
  //  FormAtendimentoPage,
 //   UsuarioPage,
   // TakePicturePage,
 //  ClientesPage,

  ],
  providers: [
   // ClientService,
    { provide: LOCALE_ID, useValue: 'pt' },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  //  CalendarComponent
  ]
})
export class AppModule {}
