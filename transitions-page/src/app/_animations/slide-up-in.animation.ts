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
        width:'100%'
      })),
      transition('void <=> *', [
        style({
          transform: 'translateY(100%)'
        }),
        animate('0.5s',
          style({
            transform: 'translatey(0%)'
          }))
      ])
  ]);
