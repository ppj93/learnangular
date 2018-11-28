import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import { UtilityService } from './utility.service';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private utility: UtilityService, private messagesService: MessageService) { }

  getHeroes():Observable<Hero[]>{
    this.messagesService.add('fetched hereos..backend..');
    return of(this.utility.clone(HEROES));
  }
}
