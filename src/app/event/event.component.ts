import {Component, OnInit} from '@angular/core';
import {EventService} from '../services/event.service';

declare var $: any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  events: any;
  calendarEvents = [];
  title = 'easyfullcalendar';


  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEvents();
    setTimeout(() => {
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        navLinks: true,
        editable: true,
        eventLimit: true,
        events: this.calendarEvents/*[
          {
            title: 'This is your',
            start: '2019-03-03T12:30:00',
            color: '#f9c66a' // override!
          },
          {
            title: 'Your meeting with john',
            start: '2019-03-07T12:30:00',
            end: '2019-03-09',
            color: "#019efb"
          },
          {
            title: 'This is Today',
            start: '2019-03-12T12:30:00',
            allDay: false, // will make the time show,
            color: "#57cd5f"
          }
        ]*/,  // request to load current events
      });
    }, 100);
  }


  getEvents() {
    this.events = this.eventService.getEvents();
    console.log(this.events);
    for (let event of this.events) {
      this.calendarEvents.push({title: event.nom, start: event.dateEvt, color: "#019efb"});
    }
    console.log(this.calendarEvents);

  }
}
