import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agrupamento } from '../shared/domain/agrupamento';
import { Pageable } from '../shared/domain/pageable';
import { SortParams } from '../shared/domain/sort-params';
import { MessageService } from '../shared/services/message/message.service';

@Injectable()
export class AgrupamentoService {

  constructor(
    private http: HttpClient,
    private message: MessageService) { }

  find(sortParams: SortParams): Observable<Pageable<Agrupamento>> {
    const params = sortParams.getParams();
    return this.http.get<Pageable<Agrupamento>>(`${environment.backend}/api/agrupamentos`, { params })
      .pipe(
        catchError(err => {
          this.message.showError(err as HttpErrorResponse);
          return EMPTY;
        })
      );
  }

  findById(id: number): Observable<Agrupamento> {
    return this.http.get<Agrupamento>(`${environment.backend}/api/agrupamentos/${id}`);
  }

  remove(item: Agrupamento): Observable<string> {
    return this.http.delete(`${environment.backend}/api/agrupamentos/${item.id}`)
      .pipe(
        mapTo('Agrupamento excluído com sucesso'),
        catchError(err => {
          this.message.showError(err as HttpErrorResponse);
          return EMPTY;
        }),
      );
  }
}
