import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Agrupamento } from 'src/app/shared/domain/agrupamento';

@Component({
  selector: 'app-agrupamento-delete',
  templateUrl: './agrupamento-delete.component.html',
})
export class AgrupamentoDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<Agrupamento>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
