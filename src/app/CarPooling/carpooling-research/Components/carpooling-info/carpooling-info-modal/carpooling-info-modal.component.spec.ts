import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingInfoModalComponent } from './carpooling-info-modal.component';

describe('CarpoolingInfoModalComponent', () => {
  let component: CarpoolingInfoModalComponent;
  let fixture: ComponentFixture<CarpoolingInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpoolingInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
