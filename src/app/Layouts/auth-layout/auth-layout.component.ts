import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarBlankComponent } from "../../Components/nav-bar-blank/nav-bar-blank.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { NavBarAuthComponent } from 'src/app/Components/nav-bar-auth/nav-bar-auth.component';
import { LogInComponent } from 'src/app/Components/log-in/log-in.component';
import { RegisterComponent } from 'src/app/Components/register/register.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NavBarAuthComponent,LogInComponent,RegisterComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  ngOnInit(): void {
    // Scroll to top on page reload
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
