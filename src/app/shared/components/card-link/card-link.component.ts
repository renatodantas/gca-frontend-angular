import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-link',
  templateUrl: './card-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardLinkComponent {

  @Input() titulo: string;
  @Input() url: string;

  constructor(public router: Router) { }

  encaminhar(): void {
    this.router.navigate([this.url]);
  }
}
