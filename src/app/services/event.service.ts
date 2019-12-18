import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events = [{id: 1, dateEvt: "2019-01-16", lieu: 'sfax', nom: 'event1'},
    {id: 2, dateEvt: "2019-12-16", lieu: 'sousse', nom: 'event2'},
    {id: 3, dateEvt: "2019-12-19", lieu: 'tunis', nom: 'event3'}];

  constructor() {
  }

  getEvents() {
    return this.events;
  }
}
