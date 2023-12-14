import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailProcessingComponent } from './email-processing.component';

describe('EmailProcessingComponent', () => {
  let component: EmailProcessingComponent;
  let fixture: ComponentFixture<EmailProcessingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailProcessingComponent]
    });
    fixture = TestBed.createComponent(EmailProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
