import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderStatusComponent } from './client-order-status.component';

describe('ClientOrderStatusComponent', () => {
  let component: ClientOrderStatusComponent;
  let fixture: ComponentFixture<ClientOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOrderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
