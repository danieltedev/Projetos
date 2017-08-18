import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class OnScrollService {

  scrollEvent: Observable<any>;

  constructor() {
    this.scrollEvent = Observable.fromEvent(window, 'scroll');
  }

}
