import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupamentoListComponent } from './agrupamento-list.component';

describe('AgrupamentoListComponent', () => {
  let component: AgrupamentoListComponent;
  let fixture: ComponentFixture<AgrupamentoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrupamentoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrupamentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
