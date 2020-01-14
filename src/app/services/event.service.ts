import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:8090/api/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events = [{id: 1, dateEvt: "2019-01-16", lieu: 'sfax', nom: 'event1'},
    {id: 2, dateEvt: "2019-12-16", lieu: 'sousse', nom: 'event2'},
    {id: 3, dateEvt: "2019-12-19", lieu: 'tunis', nom: 'event3'}];
  calendarEvents = [];

  constructor(private http: HttpClient) {
  }

  getEvents() {
    return this.http.get(URL + "/all");
  }

  addEvent(event) {
    console.log(event);
    return this.http.post(URL + "/add", event);
  }

  deleteEvent(id: Number) {
    this.http.delete(URL + "/delete/" + id);
  }

  // calendarEvent() {
  //   for (let event of this.events) {
  //     this.calendarEvents.push({title: event.nom, start: event.dateEvt, color: "#019efb"});
  //   }
  //   return this.calendarEvents;
  // }
}
