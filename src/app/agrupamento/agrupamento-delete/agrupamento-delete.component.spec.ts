import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupamentoDeleteComponent } from './agrupamento-delete.component';

describe('AgrupamentoDeleteComponent', () => {
  let component: AgrupamentoDeleteComponent;
  let fixture: ComponentFixture<AgrupamentoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrupamentoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrupamentoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
