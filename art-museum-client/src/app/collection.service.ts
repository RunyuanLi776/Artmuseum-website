import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from './message.service';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {COLLECTIONS} from './mock-collections';
import { Collection } from './collection';
import { th } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  //URL to web api
  private collectionsUrl = 'http://localhost:3000/collections';

  collection: Collection[];
  collections: Collection[] = COLLECTIONS;

  placeCols: Collection[];


  constructor(
    private http: HttpClient,
  ) { }


  //GET collections from the server
  getCollections(): Observable<Collection[]>{
    return this.http.get<Collection[]>(this.collectionsUrl)
    .pipe(
      catchError(this.handleError<Collection[]>('getCollections', []))
      );
  }

  getPlace1(Place: string){
    for(const collection of this.collections){
      if(collection.Place === Place){
        return collection;
      }
    }
    return null;
  }

  //GET collection by id, 404 if not found
  getCollection(id: string): Observable<Collection>{
    const url = `${this.collectionsUrl}/${id}`;
    return this.http.get<Collection>(url).pipe(
      catchError(this.handleError<Collection>(`getCollection id=${id}`))
    );
  }


  getPlace(place: string): void{
    const url = `${this.collectionsUrl}/place/${place}`;
    this.http.get<Collection[]>(url)
    .pipe(
      catchError(this.handleError<Collection[]>(`getPlace place=${place}`))
    ).subscribe(cols => {
      this.placeCols = cols;
    });
  }
  //PUT, update the collection on server
  // updateCollection(collection: Collection): Observable<any> {
  //   return this.http.put(this.collectionsUrl, collection).pipe(
  //     tap(_=> this.log(`update collection id=${collection.id}`)),
  //     catchError(this.handleError<any>(`updateCollection`))
  //   );
  // }

  //GET collections name contains search term
  // searchCollections(term: string): Observable<Collection[]>{
  //   if(!term.trim){
  //     //if not search term, return empty collection array
  //     return of([]);
  //   }
  //   return this.http.get<Collection[]>(`${this.collectionsUrl}/?name=${term}`).pipe(
  //     tap(_=> this.log(`found collection matching "${term}`)),
  //     catchError(this.handleError<Collection[]>(`searchCollections`, []))
  //   );
  // }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPlaces(place: string): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.collectionsUrl}/place/${place}`)
    .pipe(
      catchError(this.handleError<Collection[]>(`getPlace place=${place}`))
    );
  }
}

