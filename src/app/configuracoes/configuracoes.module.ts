import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { ConfiguracoesComponent } from './configuracoes.component';

@NgModule({
  declarations: [
    ConfiguracoesComponent,
  ],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ConfiguracoesModule { }
