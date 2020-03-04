import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs/index';
import { Agrupamento } from 'src/app/shared/domain/agrupamento';
import { Pageable } from 'src/app/shared/domain/pageable';
import { SortParams } from 'src/app/shared/domain/sort-params';
import { AgrupamentoDeleteComponent } from '../agrupamento-delete/agrupamento-delete.component';
import { AgrupamentoService } from '../agrupamento.service';

@Component({
  selector: 'app-agrupamento-list',
  templateUrl: './agrupamento-list.component.html',
})
export class AgrupamentoListComponent implements AfterViewInit, OnDestroy {

  readonly dataSource = new MatTableDataSource<Agrupamento>();
  readonly displayedColumns = ['id', 'nome', 'ativo', 'acoes'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public isLoading = false;
  public items$: Observable<Pageable<Agrupamento>>;
  private subscriptions = new Subscription();

  constructor(
    private service: AgrupamentoService,
    private dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.subscriptions.add(
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0));

    this.load();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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

  load() {
    const params = new SortParams({ sort: this.sort, paginator: this.paginator });
    this.items$ = this.service.find(params);
  }

  private excluir(item: Agrupamento) {
    this.service.remove(item).subscribe(() => {
      this.paginator.pageIndex = 0; // Reseta a paginação
      this.load();
    });
  }
}
