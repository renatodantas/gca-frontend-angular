import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, of } from 'rxjs/index';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Agrupamento } from 'src/app/shared/domain/agrupamento';
import { Pageable } from 'src/app/shared/domain/pageable';
import { MessageService } from 'src/app/shared/services/message/message.service';
import { AgrupamentoDeleteComponent } from '../agrupamento-delete/agrupamento-delete.component';
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

  isLoading = false;
  items: Pageable<Agrupamento>;

  constructor(
    private service: AgrupamentoService,
    private message: MessageService,
    private dialog: MatDialog) { }

  ngAfterViewInit(): void {
    // this.service.findAll().subscribe(res => this.dataSource.data = res.results);
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading = true;
        return this.service.find({
          sort: this.sort.active,
          order: this.sort.direction,
          page: this.paginator.pageIndex,
          size: this.paginator.pageSize
        });
      }),
      map(data => {
        this.isLoading = false;
        this.items = data;
        this.dataSource.data = data.results;
      }),
      catchError(err => {
        this.isLoading = false;
        this.message.showError(err);
        return of({});
      })
    ).subscribe();
  }

  confirmarExclusao(event: MouseEvent, data: Agrupamento) {
    event.stopPropagation();
    event.preventDefault();

    this.dialog
      .open(AgrupamentoDeleteComponent, { data })
      .afterClosed()
      .subscribe(resposta => {
        if (resposta)
          this.excluir(data);
      });
  }

  private excluir(item: Agrupamento) {
    this.service.remove(item).subscribe(
      (resp) => {
        this.message.showInfo(resp);
        // TODO: implementar a atualização da tabela pós-remoção
      },
      (err) => this.message.showError(err)
    );
  }
}
