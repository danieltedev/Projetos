import { trigger, state, animate, style, transition } from "@angular/animations";

export const slideUpInAnimation =
  trigger('slideUpInAnimation', [
    state('void', style({ position: 'fixed', width: '100%' })),
    state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate(300, style({ transform: 'translateX(0%)' }))
      // style({ opacity: 0 }),
      // animate('0.5s', style({ opacity: 1 }))
    ])
  ]);

export const teste =
  trigger('teste', [
    state('void', style({ position: 'fixed', width: '100%' })),
    state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.5s', style({ transform: 'translatey(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s', style({ transform: 'translateY(-100%)' }))
    ])
  ]);

export const slideUpInAnimationV2 =
  trigger('slideUpInAnimation2', [
    state('*', style({ width: '100%' })),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s', style({ transform: 'translatey(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s', style({ transform: 'translateY(-100%)' }))
      ])
  ]);
