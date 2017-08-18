import { Component, OnInit } from '@angular/core';
import { OnScrollService } from "../shared/on-scroll.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(onScroll: OnScrollService) {
    onScroll.scrollEvent(window).subscribe(e => console.log(e));
  }

  ngOnInit() {
  }

}
