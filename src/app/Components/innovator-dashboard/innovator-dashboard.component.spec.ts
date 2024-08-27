import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovatorDashboardComponent } from './innovator-dashboard.component';

describe('InnovatorDashboardComponent', () => {
  let component: InnovatorDashboardComponent;
  let fixture: ComponentFixture<InnovatorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InnovatorDashboardComponent]
    });
    fixture = TestBed.createComponent(InnovatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
