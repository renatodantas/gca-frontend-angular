import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfiguracoesComponent {

  constructor(title: Title) {
    title.setTitle('Configurações');
  }
}
