import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeleteIconComponent } from './delete-icon.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    DeleteIconComponent
  ],
  exports: [
    DeleteIconComponent
  ]
})
export class DeleteIconModule { }
