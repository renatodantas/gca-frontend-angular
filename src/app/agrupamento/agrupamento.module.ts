import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

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
    CommonModule,
    AgrupamentoRoutingModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    AgrupamentoService
  ]
})
export class AgrupamentoModule { }
