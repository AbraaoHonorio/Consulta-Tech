import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { CalendarPage } from './calendar';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
 
@NgModule({
    declarations: [
      CalendarPage,
      CalendarComponent
    ],
    entryComponents: [
      CalendarComponent,
    ],
    imports: [
      IonicPageModule.forChild(CalendarPage),
    ],
    exports: [
      CalendarPage
    ],
    providers: [
       CalendarComponent
     ]
   
  })
  export class LoginPageModule {}
