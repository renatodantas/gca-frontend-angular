import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Agrupamento } from '../shared/domain/agrupamento';
import { Pageable } from '../shared/domain/pageable';

@Injectable()
export class AgrupamentoService extends MatTableDataSource<Agrupamento> {

  constructor(private http: HttpClient) {
    super();
  }

  findAll(sorting: { sort?: string, order?: string, page?: number, size?: number }): Observable<Pageable<Agrupamento>> {
    const params = new HttpParams()
      .set('sort', sorting.sort || '')
      .set('order', sorting.order || 'asc')
      .set('page', `${sorting.page || 0}`)
      .set('size', `${sorting.size || 10}`);
    return this.http.get<Pageable<Agrupamento>>(environment.api + '/api/agrupamentos', { params });
  }
}
