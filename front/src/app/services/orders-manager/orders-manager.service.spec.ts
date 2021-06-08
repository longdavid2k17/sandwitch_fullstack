import { TestBed } from '@angular/core/testing';

import { OrdersManagerService } from './orders-manager.service';

describe('OrdersManagerService', () => {
  let service: OrdersManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
