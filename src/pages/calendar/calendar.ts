import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';
import { FormAtendimentoPage } from '../form-atendimento/form-atendimento';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  calendarOptions :any ;
  consulta:any = [ ];


  constructor(public navCtrl: NavController) {
  }

  ionViewWillLoad() {
    this.initializeCalendarOptions();
  }


  

  initializeCalendarOptions(){
  //  this.consulta.push(JSON.parse(localStorage.getItem('consulta')));
   // alert(this.consulta[0].titulo + '->');
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
      height: 550,
      fixedWeekCount : false,
      defaultDate: Date(),
      editable: true,
      allDay : true,
      dayClick: function(date, jsEvent, view, resourceObj) {
       console.log('Date: ' + date.format());
      },
      eventLimit: true, // allow "more" link when too many events
      events : [ {
        title: 'Long Event',
        start: '2018-11-07',
        end: '2018-11-10'
      }],/* this.load(),
       [{
          title: consulta.titulo,
          start: consulta.dataConsulta,
          end: consulta.dataConsulta,
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
      ],}*/
      eventClick: function(calEvent, jsEvent, view) {
                console.log(calEvent);
                localStorage.setItem( 'EventData', calEvent.title );
                 window.location.assign('#/result');
            }
    };  

     /* this.calendarOptions.events.push({
        title: this.consulta[0].titulo,
        start: this.consulta[0].dataConsulta
      });*/
   
  }

  load() {
    return this.consulta;
  }

  goToForm(){
    this.navCtrl.push('FormAtendimentoPage');
  }


 

}
