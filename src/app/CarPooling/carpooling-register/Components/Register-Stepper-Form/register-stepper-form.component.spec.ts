import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStepperFormComponent } from './register-stepper-form.component';

describe('RegisterStepperFormComponent', () => {
  let component: RegisterStepperFormComponent;
  let fixture: ComponentFixture<RegisterStepperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStepperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStepperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
