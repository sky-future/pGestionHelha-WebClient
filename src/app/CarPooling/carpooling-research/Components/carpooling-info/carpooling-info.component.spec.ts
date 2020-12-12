import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingInfoComponent } from './carpooling-info.component';

describe('CarpoolingInfoComponent', () => {
  let component: CarpoolingInfoComponent;
  let fixture: ComponentFixture<CarpoolingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpoolingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
