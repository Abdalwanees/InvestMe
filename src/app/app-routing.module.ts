import { ProjectCardComponent } from './Components/project-card/project-card.component';
import { ProjectDetailsComponent } from './Components/project-details/project-details.component';
import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {
    path: 'main',
    loadComponent: () => import('./Layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./Components/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
      },
      { path: '**', loadComponent: () => import('./Components/not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Error 404 !' }
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./Layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      {
        path: 'register',
        loadComponent: () => import('./Components/register/register.component').then(m => m.RegisterComponent),
        title: 'Register'
      },
      {
        path: 'login',
        loadComponent: () => import('./Components/log-in/log-in.component').then(m => m.LogInComponent),
        title: 'LogIn'
      },
      { path: '**', loadComponent: () => import('./Components/not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Error 404 !' }
    ]
  },
  {
    path: 'blank',
    loadComponent:()=>import('./Layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      {
        path: 'projects',
        loadComponent: () => import('./Components/project-list/project-list.component').then(m => m.ProjectListComponent),
        title: 'Invest Me'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./Components/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
        title: 'Admin Dashboard'
      },
      {
        path: 'profile',
        loadComponent: () => import('./Components/user-profile/user-profile.component').then(m => m.UserProfileComponent),
        title: 'User Profile'
      },
      {
        path: 'projects/new',
        loadComponent: () => import('./Components/project-form/project-form.component').then(m => m.ProjectFormComponent),
        title: 'New Project'
      },
      {
        path: 'projects/:id',
        loadComponent: () => import('./Components/project-details/project-details.component').then(m => m.ProjectDetailsComponent),
        title: 'Project Details'
      },
      {
        path: 'user-investments',
        loadComponent: () => import('./Components/user-investment/user-investment.component').then(m => m.UserInvestmentComponent),
        title: 'User Investment'
      },
      {
        path: 'messages',
        loadComponent: () => import('./Components/investor-message/investor-message.component').then(m => m.InvestorMessageComponent),
        title: 'Investor Message'
      },
      {
        path: 'chatbot',
        loadComponent: () => import('./Components/chat-bot/chat-bot.component').then(m => m.ChatBotComponent),
        title: 'Ai Helper'
      },
      {
        path: 'settings',
        loadComponent: () => import('./Components/user-settings/user-settings.component').then(m => m.UserSettingsComponent),
        title: 'Settings'
      },
      {
        path: 'notifications',
        loadComponent: () => import('./Components/notifications/notifications.component').then(m => m.NotificationsComponent),
        title: 'Notifications'
      },
      {
        path: 'comments',
        loadComponent: () => import('./Components/comment-section/comment-section.component').then(m => m.CommentSectionComponent),
        title: 'Comments'
      },
      {
        path: 'project-card',
        loadComponent: () => import('./Components/project-card/project-card.component').then(m => m.ProjectCardComponent),
        title: 'Project Card'
      },
      { path: '**', loadComponent: () => import('./Components/not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Error 404 !' }
    
     ]
  },
  { path: '**', loadComponent: () => import('./Components/not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Error 404 !' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
