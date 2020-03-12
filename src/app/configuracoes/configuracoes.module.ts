import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracaoCardComponent } from './configuracao-card/configuracao-card.component';

@NgModule({
  declarations: [
    ConfiguracoesComponent,
    ConfiguracaoCardComponent
  ],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    MatButtonModule,
  ]
})
export class ConfiguracoesModule { }
