import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  template: `
    <button mat-icon-button color="primary" title="Excluir">
      <mat-icon>delete</mat-icon>
    </button>
  `,
})
export class DeleteIconComponent { }
