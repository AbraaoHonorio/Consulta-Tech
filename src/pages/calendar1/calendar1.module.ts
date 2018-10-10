import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Calendar1Page } from './calendar1';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';

@NgModule({
  declarations: [
    Calendar1Page,
    CalendarComponent,
  ],
  imports: [
    IonicPageModule.forChild(Calendar1Page),
  ],
  entryComponents: [
    CalendarComponent,
  ],
  providers: [
    CalendarComponent
  ]
})
export class Calendar1PageModule {}
