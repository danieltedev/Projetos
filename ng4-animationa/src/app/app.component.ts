import { Component } from '@angular/core';
import { trigger } from "@angular/animations";
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('redimencionar', [

    ])
  ]
})
export class AppComponent {
  title = 'app works!';
}
