import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-icon',
  templateUrl: './active-icon.component.html',
})
export class ActiveIconComponent {

  @Input()
  value: boolean;

  iconClass() {
    return {
      'fa-check text-green-600': this.value,
      'fa-times text-red-600': !this.value
    };
  }
}
