import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoCardComponent } from './configuracao-card.component';

describe('ConfiguracaoCardComponent', () => {
  let component: ConfiguracaoCardComponent;
  let fixture: ComponentFixture<ConfiguracaoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
