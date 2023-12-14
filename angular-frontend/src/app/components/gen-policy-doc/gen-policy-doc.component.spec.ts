import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenPolicyDocComponent } from './gen-policy-doc.component';

describe('GenPolicyDocComponent', () => {
  let component: GenPolicyDocComponent;
  let fixture: ComponentFixture<GenPolicyDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenPolicyDocComponent]
    });
    fixture = TestBed.createComponent(GenPolicyDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
