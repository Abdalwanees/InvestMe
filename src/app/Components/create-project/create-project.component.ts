import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  createProjectForm: FormGroup;
  formSubmitted = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.createProjectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      videoUrl: ['', Validators.required],
      topic: ['', Validators.required],
      investmentNeeded: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.createProjectForm.valid) {
      // Safely retrieve and parse the OwnerId
      const ownerId = localStorage.getItem('id');
      const parsedOwnerId = ownerId ? +ownerId : 0;

      // Create the project data object to match the required format
      const projectData = {
        id: 0,  // If `id` is auto-generated on server side, set to 0 or omit it.
        name: this.createProjectForm.get('name')?.value,
        description: this.createProjectForm.get('description')?.value,
        videoUrl: this.createProjectForm.get('videoUrl')?.value,
        topic: this.createProjectForm.get('topic')?.value,
        investmentNeeded: this.createProjectForm.get('investmentNeeded')?.value,
        ownerId: parsedOwnerId,
        ownerName: '',  // Optional if the backend does not require it or if it's generated server-side.
        numberOfInvestors: 0,  // Set default values if the server doesn't generate them.
        totalInteractions: 0
      };

      this.http.post('https://localhost:7281/api/projects', projectData).subscribe(
        (response) => {
          console.log('Project created successfully:', response);
          this.formSubmitted = true;
          this.createProjectForm.reset();
          this.errorMessage = null; // Clear error message on successful submission
        },
        (error) => {
          console.error('Error creating project:', error);
          this.errorMessage = 'Failed to create project. Please try again later.';
        }
      );
    } else {
      this.createProjectForm.markAllAsTouched(); // Mark all controls as touched to display validation errors
    }
  }
}
