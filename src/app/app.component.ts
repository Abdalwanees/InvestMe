import { Component } from '@angular/core';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InvestMe';
}
