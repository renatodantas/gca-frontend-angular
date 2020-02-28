import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgrupamentoEditComponent } from './agrupamento-edit/agrupamento-edit.component';
import { AgrupamentoListComponent } from './agrupamento-list/agrupamento-list.component';
import { AgrupamentoRoutingModule } from './agrupamento-routing.module';

@NgModule({
  declarations: [
    AgrupamentoListComponent,
    AgrupamentoEditComponent
  ],
  imports: [
    CommonModule,
    AgrupamentoRoutingModule
  ]
})
export class AgrupamentoModule { }
