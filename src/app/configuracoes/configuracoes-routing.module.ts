import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracoesComponent } from './configuracoes.component';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesComponent
  },
  {
    path: 'agrupamentos',
    loadChildren: () => import('../agrupamento/agrupamento.module').then(m => m.AgrupamentoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesRoutingModule { }
