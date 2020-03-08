import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ActiveIconComponent } from './active-icon.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    ActiveIconComponent
  ],
  exports: [
    ActiveIconComponent
  ]
})
export class ActiveIconModule { }
