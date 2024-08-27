import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar-blank',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,HttpClientModule],
  templateUrl: './nav-bar-blank.component.html',
  styleUrls: ['./nav-bar-blank.component.scss']
})
export class NavBarBlankComponent implements OnInit{
  userType: string | null = null;
  isScrolled = false;

  constructor(private _Router:Router) {}

  ngOnInit(): void {
    this.userType = localStorage.getItem('userType');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  navigateToDashboard() {
    if (this.userType === 'Investor') {
      this._Router.navigate(['/blank/investor']);
    } else if (this.userType === 'Innovator') {
      this._Router.navigate(['/blank/innovator']);
    } else {
      // Optionally handle unknown userType or redirect to a default page
      this._Router.navigate(['/home']);
    }
  }

  logout(): void {
    localStorage.removeItem('userType');
    localStorage.removeItem('Name');
    localStorage.removeItem('id');
    // Navigate to login page
    this._Router.navigate(['auth/login']); // توجيه المستخدم إلى صفحة تسجيل الدخول
  }

}
