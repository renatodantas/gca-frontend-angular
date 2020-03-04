import { Component, OnInit } from '@angular/core';
import { AgrupamentoService } from '../agrupamento.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-agrupamento-edit',
  templateUrl: './agrupamento-edit.component.html',
})
export class AgrupamentoEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    private service: AgrupamentoService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      ativo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(id)
      .subscribe(val => this.form.setValue({
        id: val.id || '',
        nome: val.nome || '',
        ativo: val.ativo || ''
      }));
  }
}
