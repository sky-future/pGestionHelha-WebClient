import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingRegisterComponent } from './carpooling-register.component';

describe('CarpoolingRegisterComponent', () => {
  let component: CarpoolingRegisterComponent;
  let fixture: ComponentFixture<CarpoolingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpoolingRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
