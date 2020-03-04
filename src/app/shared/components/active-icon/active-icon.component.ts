import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-icon',
  template: '<i class="fa fa-lg" [ngClass]="iconClass()">',
})
export class ActiveIconComponent {

  @Input() value: boolean;

  iconClass() {
    return {
      'fa-check text-green-600': this.value,
      'fa-times text-red-600': !this.value
    };
  }
}
