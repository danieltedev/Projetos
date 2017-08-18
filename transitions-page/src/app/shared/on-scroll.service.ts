import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";

@Injectable()
export class OnScrollService {

  constructor() { }

  scrollEvent(e: Window): Observable<any> {
    return Observable.fromEvent(e, 'scroll');
  }
}
