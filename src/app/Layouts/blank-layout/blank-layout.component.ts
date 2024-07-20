import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarBlankComponent } from "../../Components/nav-bar-blank/nav-bar-blank.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { NotificationsComponent } from 'src/app/Components/notifications/notifications.component';
import { ProjectCardComponent } from 'src/app/Components/project-card/project-card.component';
import { ProjectDetailsComponent } from 'src/app/Components/project-details/project-details.component';
import { InvestorMessageComponent } from 'src/app/Components/investor-message/investor-message.component';
import { CommentSectionComponent } from 'src/app/Components/comment-section/comment-section.component';
import { ChatBotComponent } from 'src/app/Components/chat-bot/chat-bot.component';
import { AdminDashboardComponent } from 'src/app/Components/admin-dashboard/admin-dashboard.component';
import { NotFoundComponent } from 'src/app/Components/not-found/not-found.component';
import { UserSettingsComponent } from 'src/app/Components/user-settings/user-settings.component';
import { UserProfileComponent } from 'src/app/Components/user-profile/user-profile.component';
import { UserInvestmentComponent } from 'src/app/Components/user-investment/user-investment.component';
import { ProjectListComponent } from 'src/app/Components/project-list/project-list.component';
import { ProjectFormComponent } from 'src/app/Components/project-form/project-form.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarBlankComponent,
    FooterComponent, NavBarBlankComponent,
    NotificationsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    ProjectFormComponent,
    ProjectListComponent,
    UserInvestmentComponent,
    UserProfileComponent,
    UserSettingsComponent,
    NotFoundComponent,
    AdminDashboardComponent,
    ChatBotComponent,
    CommentSectionComponent,
    FooterComponent,
    InvestorMessageComponent,
],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss'],
})
export class BlankLayoutComponent {}
