import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CardLinkComponent } from './card-link.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: [
    CardLinkComponent
  ],
  exports: [
    CardLinkComponent
  ]
})
export class CardLinkModule { }
