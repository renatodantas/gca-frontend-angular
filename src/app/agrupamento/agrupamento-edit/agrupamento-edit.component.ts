import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AgrupamentoService } from '../agrupamento.service';

@Component({
  selector: 'app-agrupamento-edit',
  templateUrl: './agrupamento-edit.component.html',
})
export class AgrupamentoEditComponent implements OnInit {

  form: FormGroup = this.fb.group({
    id: ['', Validators.required],
    nome: ['', Validators.required],
    ativo: ['', Validators.required]
  });

  constructor(
    private service: AgrupamentoService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    title: Title) {
    title.setTitle('Editar Agrupamento');
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
