import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar-blank',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './nav-bar-blank.component.html',
  styleUrls: ['./nav-bar-blank.component.scss']
})
export class NavBarBlankComponent {

}
