import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  /**
   * Método criado especificamente para tratar um bug
   * do dropdown do Bulma que "trava" o drop aberto
   * caso o link tenha um atributo "href".
   *
   * @param rota a ser navegada
   */
  navegar(rota: string) {
    this.router.navigate([rota]);
  }
}
