import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';
import { Event } from './../eventDate';
import { EventBookComponent } from '../event-book/event-book.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl = 'http://localhost:3000/users';
  currentUser: User;
  currentEvent: Event;

  constructor(
    private http: HttpClient,
  ) { }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  /** Login */
  login(email: string, pwd: string): Observable<boolean> {
    // return of(true).pipe(
    //   delay(1000),
    //   tap(val => this.isLoggedIn = true)
    // );
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    let result = of(false);
    this.http.get<User>(`${this.usersUrl}/${email}/${pwd}`, httpOptions).pipe(
    ).subscribe(res => {
      if ('id' in res) {
        this.currentUser = res;
        this.isLoggedIn = true;
        result = of(true);
      }
    });
    return result;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = undefined;
  }

  /** Register User */
  register(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      // params: new HttpParams({ fromString: `${todo._id}`})
    };
    return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
      catchError(this.handleError<User>('addUser')),
    );
  }

  /** Book Events */
  bookEvent(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      // params: new HttpParams({ fromString: `${todo._id}`})
    };
    if (this.currentEvent !== undefined && this.isNewEventBook()) {
      this.currentUser.events.push(this.currentEvent);
    }
    return this.http.put<string>(`${this.usersUrl}/${this.currentUser.id}`, this.currentUser, httpOptions).pipe(
      catchError(this.handleError<string>('updateUser')),
    );
  }

  /** Delete a user */
  logoff(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      // params: new HttpParams({ fromString: `${todo._id}`})
    };
    return this.http.delete<string>(`${this.usersUrl}/${this.currentUser.id}`, httpOptions).pipe(
      catchError(this.handleError<string>('deleteUser')),
    );
  }

  /** Check if user has already book this event */
  isNewEventBook(): boolean {
    let flag = true;
    for (const event of this.currentUser.events) {
      if (this.currentEvent.id === event.id) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // User: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
