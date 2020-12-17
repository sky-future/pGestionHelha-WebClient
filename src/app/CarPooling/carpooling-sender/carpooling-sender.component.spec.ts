import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingSenderComponent } from './carpooling-sender.component';

describe('CarpoolingSenderComponent', () => {
  let component: CarpoolingSenderComponent;
  let fixture: ComponentFixture<CarpoolingSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpoolingSenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
