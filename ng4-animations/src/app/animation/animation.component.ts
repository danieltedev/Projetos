import { Component, OnInit } from '@angular/core';
import { slideUpInAnimation, teste, slideUpInAnimationV2 } from "../_animations/slide-up-in.animation";
import { trigger, state, animate, style, transition } from "@angular/animations";
import { OnScrollService } from "../on-scroll.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    slideUpInAnimationV2
  ],
  host: {'[@slideUpInAnimation2]': ''}
})
export class AnimationComponent implements OnInit {

  scrollListen:any;

  constructor(onScroll: OnScrollService) {
    console.log(slideUpInAnimationV2);
    this.scrollListen = onScroll.scrollEvent.subscribe(e => console.log(e));
    // this.scrollListen = Observable.fromEvent(window, 'scroll').subscribe(e => console.log(e));
  }

  ngOnInit() {
  }

}
