import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [],
  template: `<div class="loader"></div> `,
  styles: [
    `
      .loader {
        width: 30px;
        padding: 8px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: #25b09b;
        --_m: conic-gradient(#0000 10%, #000),
          linear-gradient(#000 0 0) content-box;
        -webkit-mask: var(--_m);
        mask: var(--_m);
        -webkit-mask-composite: source-out;
        mask-composite: subtract;
        animation: l3 1s infinite linear;
      }
      @keyframes l3 {
        to {
          transform: rotate(1turn);
        }
      }
    `,
  ],
})
export class LoadingSpinnerComponent {}
