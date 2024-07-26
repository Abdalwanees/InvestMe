import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  userSettingsForm: FormGroup;
  user = {
    name: 'John Doe',
    role: 'Investor',
    bio: 'Innovative investor with a passion for startups.',
    activities: [
      { description: 'Invested in XYZ project', date: new Date() }
    ]
  };
  roles = ['Investor', 'Innovator', 'Admin'];
  avatarPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.userSettingsForm = this.fb.group({
      name: [this.user.name],
      email: ['john.doe@example.com'],
      role: [this.user.role],
      avatar: [''],
      bio: [this.user.bio],
      theme: ['light'],
      notifications: [true],
      storage: [false]
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarPreview = e.target.result;
        this.userSettingsForm.patchValue({ avatar: file });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    console.log(this.userSettingsForm.value);
  }
}
