import {Component, OnInit} from '@angular/core';
import {EventService} from "../services/event.service";
import {FormBuilder, FormGroup} from "@angular/forms";

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
  eventForm: FormGroup;

  constructor(private eventService: EventService, private formBuilder: FormBuilder) {
    this.eventForm = formBuilder.group(
      {
        date: Date,
        lieu: String,
        nom: String
      }
    );
  }

  ngOnInit() {
    this.getEvents();
    this.getCalendarEvents();
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


  }

  getCalendarEvents() {
    this.calendarEvents = this.eventService.calendarEvent();
  }

  addEvent() {
    let event = {
      id: 4,
      dateEvt: this.eventForm.get("date").value,
      lieu: this.eventForm.get("lieu").value,
      nom: this.eventForm.get("nom").value
    };
    this.eventService.addEvent(event);
  }
}
