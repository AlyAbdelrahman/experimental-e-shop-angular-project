import { TestBed } from '@angular/core/testing';

import { ProductsServices } from './products.service';

describe('ProductsServices', () => {
  let service: ProductsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
