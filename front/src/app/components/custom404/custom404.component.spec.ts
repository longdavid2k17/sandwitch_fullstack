import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custom404Component } from './custom404.component';

describe('Custom404Component', () => {
  let component: Custom404Component;
  let fixture: ComponentFixture<Custom404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Custom404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Custom404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
