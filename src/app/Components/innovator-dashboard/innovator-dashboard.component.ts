// import { ProjectStatus } from './../../Enum/ProjectStatus.enum';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
// import { ProjectService } from 'src/app/services/ProjectService.service';
// import { ProjectDto } from 'src/app/Interfaces/Reply';
import { Router } from '@angular/router';
// import { ProjectStatus } from 'src/app/Enum/ProjectStatus.enum';


enum ProjectStatus {
  InProgress = 'In Progress',
  Completed = 'Completed',
  Cancelled = 'Cancelled'
}

interface Project {
  id: number;
  name: string;
  details: string;
  status: ProjectStatus;
  support: number;
  requiredInvestment: number;
  progress: number;
  videoUrl: SafeResourceUrl;
  comments: { user: string; text: string }[];
}

@Component({
  selector: 'app-innovator-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './innovator-dashboard.component.html',
  styleUrls: ['./innovator-dashboard.component.scss']
})
export class InnovatorDashboardComponent implements OnInit {
  userName: string | null = '';
  greeting: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const hours = new Date().getHours();
    if (hours < 12) {
      this.greeting = 'Good Morning';
    } else if (hours < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  
    const fullName = localStorage.getItem('Name');
    if (fullName) {
      this.userName = fullName.split(' ')[0]; // أخذ الاسم الأول فقط
    } else {
      this.userName = 'Guest';
    }
  }

  navigateToCreateProject(): void {
    this.router.navigate(['/add-project']);
  }
}

