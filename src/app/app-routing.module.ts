import { InvestorDashboardComponent } from './Components/investor-dashboard/investor-dashboard.component';
import { LogInComponent } from 'src/app/Components/log-in/log-in.component';
// import { ProjectCardComponent } from './Components/project-card/project-card.component';
// import { ProjectDetailsComponent } from './Components/project-details/project-details.component';
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
      { path: '', redirectTo: 'investor', pathMatch: 'full' },
      {
        path: 'investor',
        loadComponent: () => import('./Components/investor-dashboard/investor-dashboard.component').then(m => InvestorDashboardComponent),
        title: 'Investor'
      },
      {
        path: 'innovator',
        loadComponent: () => import('./Components/innovator-dashboard/innovator-dashboard.component').then(m => m.InnovatorDashboardComponent),
        title: 'Innovator'
      },
      {
        path: 'NewProject',
        loadComponent: () => import('./Components/create-project/create-project.component').then(m => m.CreateProjectComponent),
        title: 'Add Project'
      },
      {
        path: 'explore',
        loadComponent: () => import('./Components/explore-projects/explore-projects.component').then(m => m.ExploreProjectsComponent),
        title: 'Explore'
      },
      {
        path: 'projects',
        loadComponent: () => import('./Components/innovator-projects/innovator-projects.component').then(m => m.InnovatorProjectsComponent),
        title: 'Projects'
      },
      {
        path: 'chat',
        loadComponent: () => import('./Components/chat/chat.component').then(m => m.ChatComponent),
        title: 'Chat'
      },
      {
        path: 'user-investments',
        loadComponent: () => import('./Components/user-investment/user-investment.component').then(m => m.UserInvestmentComponent),
        title: 'User Investment'
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
      { path: '**', loadComponent: () => import('./Components/not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Error 404 !' }
    
     ]
  },
  { path: '**', loadComponent: () => import('./Components/not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Error 404 !' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
