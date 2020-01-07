import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanapadaSevaComponent } from './janapada-seva.component';

describe('JanapadaSevaComponent', () => {
  let component: JanapadaSevaComponent;
  let fixture: ComponentFixture<JanapadaSevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanapadaSevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanapadaSevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
