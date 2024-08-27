import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovatorProjectsComponent } from './innovator-projects.component';

describe('InnovatorProjectsComponent', () => {
  let component: InnovatorProjectsComponent;
  let fixture: ComponentFixture<InnovatorProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InnovatorProjectsComponent]
    });
    fixture = TestBed.createComponent(InnovatorProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
