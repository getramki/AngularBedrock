import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChatbotComponent } from './customer-chatbot.component';

describe('CustomerChatbotComponent', () => {
  let component: CustomerChatbotComponent;
  let fixture: ComponentFixture<CustomerChatbotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerChatbotComponent]
    });
    fixture = TestBed.createComponent(CustomerChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
