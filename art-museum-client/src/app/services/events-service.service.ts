import { Event } from './../eventDate';
import { EVENTS } from './../mock-events';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsServiceService {

  private eventsUrl = 'http://localhost:3000/events';

  events: CalendarEvent[] = [];
  ctmEvent: Event;
  tempEvents: Event[] = EVENTS;

  constructor(
    private http: HttpClient
  ) { }

  // getAllEvents(): Event[] {
  //   return this.events;
  // }

  getEvent(id: string) {
    for (const event of this.tempEvents) {
      if (event.id === id) {
        return event;
      }
    }
    return null;
  }


  /** GET All events */
  getAllEvents2(): Observable<Event[]> {
    // of() not of ()
    return this.http.get<Event[]>(this.eventsUrl)
    .pipe(
      catchError(this.handleError<Event[]>('getEvents', []))
    );

  }



  /** GET event by id. Will 404 if id not found */
  getOneEvent(id: string): Observable<Event> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<Event>(url).pipe(
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // EVENT: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
