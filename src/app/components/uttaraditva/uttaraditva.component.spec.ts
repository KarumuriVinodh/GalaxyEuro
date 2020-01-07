import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UttaraditvaComponent } from './uttaraditva.component';

describe('UttaraditvaComponent', () => {
  let component: UttaraditvaComponent;
  let fixture: ComponentFixture<UttaraditvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UttaraditvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UttaraditvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
