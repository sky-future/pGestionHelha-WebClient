import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingRequestComponent } from './carpooling-request.component';

describe('CarpoolingRequestComponent', () => {
  let component: CarpoolingRequestComponent;
  let fixture: ComponentFixture<CarpoolingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpoolingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
