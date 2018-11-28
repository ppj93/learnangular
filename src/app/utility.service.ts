import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  clone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}
