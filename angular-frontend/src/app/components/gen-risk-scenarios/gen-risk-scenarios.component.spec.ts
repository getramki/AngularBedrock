import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenRiskScenariosComponent } from './gen-risk-scenarios.component';

describe('GenRiskScenariosComponent', () => {
  let component: GenRiskScenariosComponent;
  let fixture: ComponentFixture<GenRiskScenariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenRiskScenariosComponent]
    });
    fixture = TestBed.createComponent(GenRiskScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
