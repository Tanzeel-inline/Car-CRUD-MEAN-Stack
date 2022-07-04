import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehicleItemComponent } from './show-vehicle-item.component';

describe('ShowVehicleItemComponent', () => {
  let component: ShowVehicleItemComponent;
  let fixture: ComponentFixture<ShowVehicleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVehicleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVehicleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
