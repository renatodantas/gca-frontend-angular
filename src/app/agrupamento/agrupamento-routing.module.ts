import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgrupamentoEditComponent } from './agrupamento-edit/agrupamento-edit.component';
import { AgrupamentoListComponent } from './agrupamento-list/agrupamento-list.component';

const routes: Routes = [
  {
    path: '',
    component: AgrupamentoListComponent
  },
  {
    path: ':id',
    component: AgrupamentoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgrupamentoRoutingModule { }
