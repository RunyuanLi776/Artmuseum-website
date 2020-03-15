import { EventDetailsComponent } from './../event-details/event-details.component';
import { EventsServiceService } from './../services/events-service.service';
import { Event } from './../eventDate';
import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { setDate } from 'date-fns';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss']
})
export class EventsCalendarComponent implements OnInit {

  viewDate: Date = new Date();

  selectedEvents: Event[] = [];

  // events: Array<CalendarEvent> = [
  //   {
  //     id: 1,
  //     title: 'Increments badge total on the day cell',
  //     start: new Date(),
  //   },
  //   {
  //     id: 2,
  //     title: 'Does not increment the badge total on the day cell',
  //     start: setDate(new Date(), 3),
  //   }
  // ];
  ctmEvents: Event[];

  ctmEvent: Event;

  events: Array<CalendarEvent>;

  clickedDate: Date;

  constructor(private eventsServiceService: EventsServiceService) { }

  ngOnInit() {
    this.transEvents();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.selectedEvents = [];
    for (const event of events) {
      for (const cEvent of this.ctmEvents) {
        if (cEvent.id === event.id) {
          this.selectedEvents.push(cEvent);
        }
      }
    }
  }

  // transEvents2(): void {
  //   this.ctmEvents = this.eventsServiceService.getAllEvents();
  //   for (this.ctmEvent of this.ctmEvents) {
  //     const myTitle = this.ctmEvent.title;
  //     const event: CalendarEvent = {
  //       start: new Date(this.ctmEvent.date),
  //       title: myTitle,
  //       id: this.ctmEvent.id,
  //     };
  //     this.events.push(event);
  //   }
  // }




  transEvents(): void {
    this.eventsServiceService.getAllEvents2()
    .subscribe(e => {
      this.events = [];
      for (this.ctmEvent of e) {
        const myTitle = this.ctmEvent.title;
        const event: CalendarEvent = {
          start: new Date(this.ctmEvent.date),
          title: myTitle,
          id: this.ctmEvent.id,
        };
        this.ctmEvents = e;
        this.events.push(event);
      }
    });
  }

  // trans(): void {
  //   alert("???" + this.eventsTemp);
  //   this.eventsTemp.subscribe(e => {
  //     for (this.ctmEvent of e) {
  //       const myTitle = this.ctmEvent.title;
  //       const event: CalendarEvent = {
  //         start: new Date(this.ctmEvent.date),
  //         title: myTitle,
  //         id: this.ctmEvent.id,
  //       };
  //       this.events.push(event);
  //     }
  //   });
  //   alert(this.events);
  // }




}
