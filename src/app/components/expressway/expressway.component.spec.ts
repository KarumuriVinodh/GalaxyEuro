import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpresswayComponent } from './expressway.component';

describe('ExpresswayComponent', () => {
  let component: ExpresswayComponent;
  let fixture: ComponentFixture<ExpresswayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpresswayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpresswayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
