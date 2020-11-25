import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormAddressComponent } from './register-form-address.component';

describe('RegisterFormAddressComponent', () => {
  let component: RegisterFormAddressComponent;
  let fixture: ComponentFixture<RegisterFormAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
