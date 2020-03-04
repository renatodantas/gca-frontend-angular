import { Component } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: `
    <button mat-icon-button class="float-left" style="margin: -5px 10px 0 -50px">
      <i class="fa fa-fw fa-2x fa-arrow-left"></i>
    </button>
  `,
})
export class BackButtonComponent { }
