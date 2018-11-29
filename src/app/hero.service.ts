import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { UtilityService } from './utility.service';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, tap, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private utility: UtilityService, private messagesService: MessageService) { }

  getHeroes():Observable<Hero[]>{
    this.messagesService.add('fetched hereos..backend..');
    return this.http.get<Hero[]>(this.heroesUrl).pipe(catchError(this.handleError('getHeroes', [])));
  }

  private heroesUrl = 'api/heroes';
  private log(message: string){
    this.messagesService.add(`heroService: ${message}`);
  }

  private handleError<T>(operation='operation', result?:T){
    return (error:any):Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: message: ${error.message}`);
      return of(result as T);
    };
  }
}
