import { Component } from '@angular/core';

import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animacao', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inaction => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('combinado', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active, active => inactive', animate('100ms ease-out'))
    ]),
    trigger('direcaodupla', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive <=> active', animate('100ms ease-out'))
    ]),
    trigger('inlinestyle', [
      transition('inactive => active', [
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.3)'
        }),
        animate('80ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }))
      ])
    ]),
    trigger('mostrarsaida', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('animacaocompleta', [
      state('inactive', style({ transform: 'translateX(0) scale(1)' })),
      state('active', style({ transform: 'translateX(0) scale(1.1)' })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({ transform: 'translateX(-100%) scale(1)' }),
        animate(100)
      ]),
      transition('inactive => void', [
        animate(100, style({ transform: 'translateX(100%) scale(1)' }))
      ]),
      transition('void => active', [
        style({ transform: 'translateX(0) scale(0)' }),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({ transform: 'translateX(0) scale(0)' }))
      ])
    ]),
    trigger('chaqualharsair', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app';

  state: String = 'active';
  lista: String[] = [];

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }

  addItemLista() {
    this.lista.push('item - ' + this.lista.length);
  }

  rmItemLista() {
    this.lista.splice(this.lista.length -1, 1);
  }
}
