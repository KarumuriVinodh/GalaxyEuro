import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DharmaadikaritvaComponent } from './dharmaadikaritva.component';

describe('DharmaadikaritvaComponent', () => {
  let component: DharmaadikaritvaComponent;
  let fixture: ComponentFixture<DharmaadikaritvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DharmaadikaritvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DharmaadikaritvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
