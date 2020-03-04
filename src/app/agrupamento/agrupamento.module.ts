import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ActiveIconModule } from '../shared/components/active-icon/active-icon.module';
import { BackButtonModule } from '../shared/components/back-button/back-button.module';
import { DeleteIconModule } from '../shared/components/delete-icon/delete-icon.module';
import { MessageService } from '../shared/services/message/message.service';
import { AgrupamentoDeleteComponent } from './agrupamento-delete/agrupamento-delete.component';
import { AgrupamentoEditComponent } from './agrupamento-edit/agrupamento-edit.component';
import { AgrupamentoListComponent } from './agrupamento-list/agrupamento-list.component';
import { AgrupamentoRoutingModule } from './agrupamento-routing.module';
import { AgrupamentoService } from './agrupamento.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgrupamentoListComponent,
    AgrupamentoEditComponent,
    AgrupamentoDeleteComponent
  ],
  imports: [
    ActiveIconModule,
    AgrupamentoRoutingModule,
    BackButtonModule,
    CommonModule,
    DeleteIconModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [
    AgrupamentoService,
    MessageService
  ]
})
export class AgrupamentoModule { }
