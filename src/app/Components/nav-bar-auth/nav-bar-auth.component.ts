import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar-auth',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar-auth.component.html',
  styleUrls: ['./nav-bar-auth.component.scss']
})
export class NavBarAuthComponent {

}
