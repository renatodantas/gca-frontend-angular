import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    BackButtonComponent
  ]
})
export class BackButtonModule { }
