import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { ActiveIconModule } from '../shared/components/active-icon/active-icon.module';
import { DeleteIconModule } from '../shared/components/delete-icon/delete-icon.module';
import { AgrupamentoDeleteComponent } from './agrupamento-delete/agrupamento-delete.component';
import { AgrupamentoEditComponent } from './agrupamento-edit/agrupamento-edit.component';
import { AgrupamentoListComponent } from './agrupamento-list/agrupamento-list.component';
import { AgrupamentoRoutingModule } from './agrupamento-routing.module';
import { AgrupamentoService } from './agrupamento.service';
import { MessageService } from '../shared/services/message/message.service';

@NgModule({
  declarations: [
    AgrupamentoListComponent,
    AgrupamentoEditComponent,
    AgrupamentoDeleteComponent
  ],
  imports: [
    ActiveIconModule,
    AgrupamentoRoutingModule,
    CommonModule,
    DeleteIconModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [
    AgrupamentoService,
    MessageService
  ]
})
export class AgrupamentoModule { }
