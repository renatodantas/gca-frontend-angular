import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-icon',
  template: '<mat-icon [class]="getClass()" [title]="getLabel()">{{ getIcon() }}</mat-icon>',
})
export class ActiveIconComponent {

  @Input() value: boolean;

  getClass() {
    return this.value ? 'text-green-600' : 'text-red-600';
  }

  getIcon() {
    return this.value ? 'check_circle' : 'block';
  }

  getLabel() {
    return this.value ? 'Ativo' : 'Inativo';
  }
}
