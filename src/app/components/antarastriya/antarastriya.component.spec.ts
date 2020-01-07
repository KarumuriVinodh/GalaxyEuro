import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntarastriyaComponent } from './antarastriya.component';

describe('AntarastriyaComponent', () => {
  let component: AntarastriyaComponent;
  let fixture: ComponentFixture<AntarastriyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntarastriyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntarastriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
