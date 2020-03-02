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

  findAll(sort?: string, order = 'asc', page = 0): Observable<Pageable<Agrupamento>> {
    const params = new HttpParams()
      .set('sort', sort)
      .set('order', order)
      .set('page', page.toString());
    return this.http.get<Pageable<Agrupamento>>(environment.api + '/api/agrupamentos', { params });
  }
}
