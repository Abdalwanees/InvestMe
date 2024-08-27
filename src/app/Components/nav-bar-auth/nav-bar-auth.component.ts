import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar-auth',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar-auth.component.html',
  styleUrls: ['./nav-bar-auth.component.scss']
})
export class NavBarAuthComponent {

  constructor(private router: Router) {}

  navigateToDashboard() {

      this.router.navigate(['/main/home']);
  
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) { // إذا كان التمرير أكثر من 50 بكسل
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

}
