import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveIconComponent } from './active-icon.component';

describe('ActiveIconComponent', () => {
  let component: ActiveIconComponent;
  let fixture: ComponentFixture<ActiveIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
