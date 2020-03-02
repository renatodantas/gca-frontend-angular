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

  // Paginação
  isLoading = false;
  count = 0;
  pageNumber = 0;
  pageSize = 0;
  pages = 0;

  constructor(private service: AgrupamentoService) { }

  ngAfterViewInit(): void {
    // this.service.findAll().subscribe(res => this.dataSource.data = res.results);
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading = true;
        return this.service.findAll({
          sort: this.sort.active,
          order: this.sort.direction,
          page: this.paginator.pageIndex,
          size: this.paginator.pageSize
        });
      }),
      map(data => {
        this.isLoading = false;
        this.count = data.count;
        this.pageNumber = data.page_number;
        this.pageSize = data.page_size;
        this.pages = data.pages;
        this.dataSource.data = data.results;
      }),
      catchError(err => {
        this.isLoading = false;
        console.log('Deu erro:', err);
        return of({});
      })
    ).subscribe();
  }

  excluir(event: MouseEvent, item: Agrupamento) {
    event.stopPropagation();
    event.preventDefault();
    alert('Vai excluir ' + item.nome);
  }

  selecionou(item: Agrupamento) {
    alert('Selecionou: ' + item.nome);
  }
}
