import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectComponent } from './create-project.component';

describe('CreateProjectComponent', () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateProjectComponent]
    });
    fixture = TestBed.createComponent(CreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
