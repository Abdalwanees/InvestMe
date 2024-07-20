import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBlankComponent } from './nav-bar-blank.component';

describe('NavBarBlankComponent', () => {
  let component: NavBarBlankComponent;
  let fixture: ComponentFixture<NavBarBlankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavBarBlankComponent]
    });
    fixture = TestBed.createComponent(NavBarBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
