import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, of } from 'rxjs/index';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Agrupamento } from 'src/app/shared/domain/agrupamento';
import { Pageable } from 'src/app/shared/domain/pageable';

import { AgrupamentoService } from '../agrupamento.service';

@Component({
  selector: 'app-agrupamento-list',
  templateUrl: './agrupamento-list.component.html',
})
export class AgrupamentoListComponent implements AfterViewInit {

  readonly dataSource = new MatTableDataSource<Agrupamento>();
  readonly displayedColumns = ['id', 'nome', 'ativo', 'acoes'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  total = 0;
  isLoading = false;
  count: number;
  pageNumber: number;
  pageSize: number;
  pages: number;

  constructor(private service: AgrupamentoService) { }

  ngAfterViewInit(): void {
    // this.service.findAll().subscribe(res => this.dataSource.data = res.results);
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        console.log('sort', this.sort, 'paging:', this.paginator);
        this.isLoading = true;
        return this.service.findAll();
      }),
      map(data => {
        this.isLoading = false;
        this.total = data.count;
        return data;
      }),
      catchError(err => {
        this.isLoading = false;
        console.log('Deu erro:', err);
        return of({});
      })
    ).subscribe((data: Pageable<Agrupamento>) => this.dataSource.data = data.results);
  }

  excluir(item: Agrupamento) {
    alert('Vai excluir ' + item.nome);
  }
}
