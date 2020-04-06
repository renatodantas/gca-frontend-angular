import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardLinkModule } from '../shared/components/card-link/card-link.module';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { ConfiguracoesComponent } from './configuracoes.component';

@NgModule({
  declarations: [
    ConfiguracoesComponent,
  ],
  imports: [
    CardLinkModule,
    CommonModule,
    ConfiguracoesRoutingModule,
  ]
})
export class ConfiguracoesModule { }
