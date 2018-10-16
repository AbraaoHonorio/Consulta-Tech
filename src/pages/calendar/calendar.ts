import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { FormAtendimentoPage } from '../form-atendimento/form-atendimento';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  calendarOptions :any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.initializeCalendarOptions();
  }

  initializeCalendarOptions(){
   
    this.calendarOptions = {
      ignoreTimezone: false,
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      header: {
        left: 'title',
        right: 'month,agendaWeek,agendaDay,agendaFourDay,'
      },
      footer: {
        right: 'today prev,next',   
      },
      views: {
        agendaFourDay: {
            type: 'listYear',
            buttonText: 'Lista'
        }
      },
      buttonText: {
        today: "Hoje",
        month: "Mês",
        week: "Semana",
        day: "Dia"
    },
   //   theme:'jquery-ui',
      height: 450,
      fixedWeekCount : false,
      defaultDate: Date(),
      editable: true,
      allDay : true,
      dayClick: function(date, jsEvent, view, resourceObj) {
       console.log('Date: ' + date.format());
      },
      eventLimit: true, // allow "more" link when too many events
      events : [
        {
          title: 'All Day Event',
          start: new Date(),
          end: new Date(),
        },
        {
          title: 'Long Event',
          start: '2018-10-07',
          end: '2018-10-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-10-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-10-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-10-11',
          end: '2018-10-13'
        },
        {
          title: 'Meeting',
          start: '2018-10-12T10:30:00',
          end: '2018-10-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-10-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-10-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-10-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-10-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-10-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-10-28'
        }
      ],
      eventClick: function(calEvent, jsEvent, view) {
                console.log(calEvent);
                localStorage.setItem( 'EventData', calEvent.title );
                 window.location.assign('#/result');
            }
    };  
  }

  goToForm(){
    this.navCtrl.push(FormAtendimentoPage);
  }

}
