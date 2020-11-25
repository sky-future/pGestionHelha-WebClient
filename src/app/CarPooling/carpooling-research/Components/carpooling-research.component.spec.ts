import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolingResearchComponent } from './carpooling-research.component';

describe('CarpoolingResearchComponent', () => {
  let component: CarpoolingResearchComponent;
  let fixture: ComponentFixture<CarpoolingResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpoolingResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolingResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
