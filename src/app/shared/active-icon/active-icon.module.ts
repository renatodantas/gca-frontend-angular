import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActiveIconComponent } from './active-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActiveIconComponent
  ],
  exports: [
    ActiveIconComponent
  ]
})
export class ActiveIconModule { }
