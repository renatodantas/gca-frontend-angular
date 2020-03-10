import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-configuracao-card',
  templateUrl: './configuracao-card.component.html',
  styleUrls: ['./configuracao-card.component.scss']
})
export class ConfiguracaoCardComponent {

  @Input()
  titulo: string;

}
