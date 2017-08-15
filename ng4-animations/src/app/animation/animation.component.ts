import { Component, OnInit } from '@angular/core';
import { slideUpInAnimation, teste } from "../_animations/slide-up-in.animation";
import { trigger, state, animate, style, transition } from "@angular/animations";

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    slideUpInAnimation
  ],
  host: {'[@slideUpInAnimation]': ''}
})
export class AnimationComponent implements OnInit {

  constructor() {
    console.log(slideUpInAnimation);
  }

  ngOnInit() {
  }

}
