import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agrupamento } from '../shared/domain/agrupamento';
import { Pageable } from '../shared/domain/pageable';
import { SortParams } from '../shared/domain/sort-params';

@Injectable()
export class AgrupamentoService {

  constructor(private http: HttpClient) { }

  findAll(sortParams: SortParams): Observable<Pageable<Agrupamento>> {
    const params = new HttpParams()
      .set('sort', sortParams.sort || '')
      .set('order', sortParams.order || 'asc')
      .set('page', `${sortParams.page || 0}`)
      .set('size', `${sortParams.size || 10}`);
    return this.http.get<Pageable<Agrupamento>>(environment.backend + '/api/agrupamentos', { params });
  }
}
