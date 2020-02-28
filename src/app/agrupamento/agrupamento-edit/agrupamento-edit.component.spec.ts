import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupamentoEditComponent } from './agrupamento-edit.component';

describe('AgrupamentoEditComponent', () => {
  let component: AgrupamentoEditComponent;
  let fixture: ComponentFixture<AgrupamentoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrupamentoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrupamentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
