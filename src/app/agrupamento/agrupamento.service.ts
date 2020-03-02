import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { Agrupamento } from '../shared/domain/agrupamento';
import { Pageable } from '../shared/domain/pageable';

@Injectable()
export class AgrupamentoService extends MatTableDataSource<Agrupamento> {

  constructor(private http: HttpClient) {
    super();
  }

  findAll(): Observable<Pageable<Agrupamento>> {
    return this.http.get<Pageable<Agrupamento>>('http://localhost:8080/api/agrupamentos');
  }
}
