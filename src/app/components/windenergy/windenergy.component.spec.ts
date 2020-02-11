import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindenergyComponent } from './windenergy.component';

describe('WindenergyComponent', () => {
  let component: WindenergyComponent;
  let fixture: ComponentFixture<WindenergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindenergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindenergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
