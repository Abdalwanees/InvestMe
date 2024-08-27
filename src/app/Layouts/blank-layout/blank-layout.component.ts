import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarBlankComponent } from "../../Components/nav-bar-blank/nav-bar-blank.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { NotificationsComponent } from 'src/app/Components/notifications/notifications.component';
import { CommentSectionComponent } from 'src/app/Components/comment-section/comment-section.component';
import { NotFoundComponent } from 'src/app/Components/not-found/not-found.component';
import { UserInvestmentComponent } from 'src/app/Components/user-investment/user-investment.component';
import { CreateProjectComponent } from 'src/app/Components/create-project/create-project.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarBlankComponent,
    FooterComponent, NavBarBlankComponent,
    NotificationsComponent,
    UserInvestmentComponent,
    NotFoundComponent,
    CommentSectionComponent,
    FooterComponent,
    CreateProjectComponent
],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss'],
})
export class BlankLayoutComponent {}
