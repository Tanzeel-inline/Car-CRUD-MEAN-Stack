import { TestBed } from '@angular/core/testing';

import { ShowVehicleService } from './show-vehicle.service';

describe('ShowVehicleService', () => {
  let service: ShowVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
