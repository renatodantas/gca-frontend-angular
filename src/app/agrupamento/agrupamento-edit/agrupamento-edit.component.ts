import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Agrupamento } from 'src/app/shared/domain/agrupamento';
import { AgrupamentoService } from '../agrupamento.service';

@Component({
  selector: 'app-agrupamento-edit',
  templateUrl: './agrupamento-edit.component.html',
  styleUrls: ['./agrupamento-edit.component.scss']
})
export class AgrupamentoEditComponent implements AfterViewInit {

  item: Agrupamento;

  constructor(
    private service: AgrupamentoService,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
    console.log('view initing')
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        console.log('chegou ID', id)
        return id === 'novo'
          ? of({} as Agrupamento)
          : this.service.findById(+id);
      }),
      tap(item => this.item = item)
    ).subscribe();
  }
}
