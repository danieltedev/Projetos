import {
  animate,
  state,
  style,
  trigger,
  transition
} from '@angular/animations';

export const slideUpInAnimation =
  trigger('slideUpInAnimation', [
    state('*',
      style({
        position: 'fixed',
        width: '100%'
      })),
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.5s', style({ transform: 'translatey(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s', style({ transform: 'translateY(-100%)' }))
    ])
  ]);
