import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Agrupamento } from 'src/app/shared/domain/agrupamento';

import { AgrupamentoService } from '../agrupamento.service';

@Component({
  selector: 'app-agrupamento-list',
  templateUrl: './agrupamento-list.component.html',
  styleUrls: ['./agrupamento-list.component.scss']
})
export class AgrupamentoListComponent implements OnInit {

  dataSource = new MatTableDataSource<Agrupamento>();
  displayedColumns = ['id', 'nome', 'ativo', 'acoes'];

  constructor(private service: AgrupamentoService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(res => this.dataSource.data = res.results);
  }

}
