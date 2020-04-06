import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Serviço de exibição de mensagens informativas no sistema.
 */
@Injectable({ providedIn: 'root' })
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  private readonly CLOSE_LABEL = 'FECHAR';
  private readonly TIMEOUT = 5000;

  /**
   * Exibe mensagem de sucesso.
   *
   * @param message mensagem de sucesso a ser exibida
   */
  showInfo(message: string) {
    this.snackBar.open(message, this.CLOSE_LABEL, {
      duration: this.TIMEOUT,
      panelClass: 'bg-green-700'
    });
  }

  /**
   * Exibe mensagens de erro.
   *
   * @param err mensagem de erro (string) ou objeto que originou o erro (HttpErrorResponse)
   */
  showError(err: string | HttpErrorResponse) {
    let message = err.toString();
    if (err instanceof HttpErrorResponse)
      message = `${err.error.message} [${err.error.code}]`;

    this.snackBar.open(message, this.CLOSE_LABEL, {
      duration: this.TIMEOUT,
      panelClass: 'bg-red-700'
    });
  }
}
