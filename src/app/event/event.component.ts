import { Component, OnInit } from '@angular/core';
import { EventService } from "../services/event.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenStorageService } from '../services/token-storage.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  roleAdmin: boolean = false;

  constructor(private eventService: EventService, private formBuilder: FormBuilder,
    private token: TokenStorageService) {
    this.eventForm = formBuilder.group(
      {
        date: Date,
        lieu: String,
        nom: String
      }
    );
  }

  ngOnInit() {
    if (this.token.getUser() != null) {
      this.roleAdmin = this.token.getUser().role.roleName == 'ROLE_ADMIN';
    }
    this.getEvents();
    setTimeout(() => {
      $("#calendar").fullCalendar({
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
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      for (let event of this.events) {
        this.calendarEvents.push({ title: event.nom, start: event.dateEVT, color: "#019efb" });
      }
    });


  }

  addEvent() {
    let event = {
      dateEvt: new Date(this.eventForm.get("date").value),
      lieu: this.eventForm.get("lieu").value,
      nom: this.eventForm.get("nom").value
    };

    event.dateEvt = new Date(event.dateEvt.getFullYear() + "-" + event.dateEvt.getMonth() + "-" + event.dateEvt.getDay());
    this.eventService.addEvent(this.eventForm.value).subscribe(response => {
      console.log(response);
    });
    window.location.reload();
  }

  delete(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Event!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.eventService.deleteEvent(id).subscribe();
        window.location.reload();
        Swal.fire(
          'Deleted!',
          'Event has been deleted.',
          'success'
        );

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Event is safe :)',
        );
      }
    });
  }
}
