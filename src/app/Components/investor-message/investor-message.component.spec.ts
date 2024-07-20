import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorMessageComponent } from './investor-message.component';

describe('InvestorMessageComponent', () => {
  let component: InvestorMessageComponent;
  let fixture: ComponentFixture<InvestorMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InvestorMessageComponent]
    });
    fixture = TestBed.createComponent(InvestorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
