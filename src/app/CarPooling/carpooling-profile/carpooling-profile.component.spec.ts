import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingProfileComponent } from './carpooling-profile.component';

describe('CarpoolingProfileComponent', () => {
  let component: CarpoolingProfileComponent;
  let fixture: ComponentFixture<CarpoolingProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpoolingProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
