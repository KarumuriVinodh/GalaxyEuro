import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManavaComponent } from './manava.component';

describe('ManavaComponent', () => {
  let component: ManavaComponent;
  let fixture: ComponentFixture<ManavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
