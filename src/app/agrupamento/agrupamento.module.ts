import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { ActiveIconModule } from '../shared/active-icon/active-icon.module';
import { DeleteIconModule } from '../shared/delete-icon/delete-icon.module';
import { AgrupamentoEditComponent } from './agrupamento-edit/agrupamento-edit.component';
import { AgrupamentoListComponent } from './agrupamento-list/agrupamento-list.component';
import { AgrupamentoRoutingModule } from './agrupamento-routing.module';
import { AgrupamentoService } from './agrupamento.service';

@NgModule({
  declarations: [
    AgrupamentoListComponent,
    AgrupamentoEditComponent
  ],
  imports: [
    ActiveIconModule,
    AgrupamentoRoutingModule,
    CommonModule,
    DeleteIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [
    AgrupamentoService
  ]
})
export class AgrupamentoModule { }
