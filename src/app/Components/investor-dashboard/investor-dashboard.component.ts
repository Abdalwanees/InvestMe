import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; // استيراد DatePipe
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-investor-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investor-dashboard.component.html',
  styleUrls: ['./investor-dashboard.component.scss'],
  providers: [DatePipe] // إضافة DatePipe كمزود
})
export class InvestorDashboardComponent implements OnInit {
  userName: string | null = '';
  greeting: string = '';
  totalInvestments: number = 0;
  expectedReturns: number = 0;
  projectsSupported: number = 0;
  activities: any[] = [];

  constructor(private router: Router, private http: HttpClient, private datePipe: DatePipe) {} // حقن DatePipe

  ngOnInit(): void {
    this.setGreeting();
    this.setUserName();
    this.loadInvestmentSummary();
    this.loadInvestmentActivities();
  }

  setGreeting(): void {
    const hours = new Date().getHours();
    if (hours < 12) {
      this.greeting = 'Good Morning';
    } else if (hours < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  }

  setUserName(): void {
    const fullName = localStorage.getItem('Name');
    this.userName = fullName ? fullName.split(' ')[0] : 'Guest';
  }

  loadInvestmentSummary(): void {
    const investorId = localStorage.getItem('id');
    this.http.get<any>(`http://investme.runasp.net/api/Investor/${investorId}/investment-summary`).subscribe({
      next: (data) => {
        this.totalInvestments = data.totalSupport;
        this.expectedReturns = data.expectedReturn;
        this.projectsSupported = data.supportedProjectsCount;
      },
      error: (err) => {
        console.error('Failed to load investment summary', err);
      }
    });
  }

  loadInvestmentActivities(): void {
    const investorId = localStorage.getItem('id');
    this.http.get<any>(`http://investme.runasp.net/api/Investor/${investorId}/activities`).subscribe({
      next: (data) => {
        if (data && data.activities.length > 0) {
          this.activities = data.activities.map((activity: any) => {
            // تنسيق التاريخ باستخدام DatePipe
            activity.date = this.datePipe.transform(activity.date, 'dd MMM yyyy, HH:mm');
            return activity;
          });
          console.log(this.activities);
        } else {
          console.log(data.Message || 'No activities found.');
          this.activities = [];
        }
      },
      error: (err) => {
        console.error('Failed to load investment activities', err);
      }
    });
  }

  navigateToExploreProjects(): void {
    this.router.navigate(['/blank/explore']);
  }
}
