import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SafeUrlPipe } from 'src/app/Pipe/SafeUrlPipe.pipe';
import { Project } from 'src/app/Interfaces/Project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, SafeUrlPipe],
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.scss']
})
export class ExploreProjectsComponent implements OnInit {
  projects: Project[] = [];
  commentForms: { [key: number]: FormGroup } = {};
  replyForms: { [key: number]: boolean } = {};
  replyContent: { [key: number]: string } = {};
  isInvestor: boolean = false;
  supportFormVisible: { [key: number]: boolean } = {};
  supportForms: { [key: number]: FormGroup } = {};

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.isInvestor = localStorage.getItem('userType') === 'Investor'; // Check user type
    this.getProjects().subscribe(
      (projects: Project[]) => {
        this.projects = projects;
        this.initializeCommentForms();
        this.initializeSupportForms();
      },
      error => console.error('Error fetching projects:', error)
    );
  }

  initializeCommentForms(): void {
    this.projects.forEach(project => {
      this.commentForms[project.id] = this.fb.group({
        comment: ['']
      });
      project.comments?.forEach(comment => {
        this.replyForms[comment.id] = false;
        this.replyContent[comment.id] = '';
      });
    });
  }

  initializeSupportForms(): void {
    this.projects.forEach(project => {
      this.supportForms[project.id] = this.fb.group({
        amount: [''],
        contactMethod: ['']
      });
      this.supportFormVisible[project.id] = false;
    });
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://investme.runasp.net/api/Projects')
      .pipe(
        catchError(error => {
          console.error('Error fetching projects:', error);
          return throwError(() => new Error('Failed to fetch projects'));
        })
      );
  }

  openChat(projectOwnerId: number): void {
    const currentUserId = +localStorage.getItem('id')!;
    this.router.navigate(['/blank/chat'], { queryParams: { receiverId: projectOwnerId, currentUserId: currentUserId } });
  }

  convertToEmbedUrl(url: string): string {
    const youtubeEmbedUrlPrefix = 'https://www.youtube.com/embed/';
    const videoId = this.extractYouTubeVideoId(url);
    return videoId ? `${youtubeEmbedUrlPrefix}${videoId}` : '';
  }

  private extractYouTubeVideoId(url: string): string | null {
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)|(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
    const match = url.match(youtubeRegex);
    if (match) {
      return match[1] || match[2] || null;
    }
    return null;
  }

  incrementInteraction(projectId: number): void {
    const userId = localStorage.getItem('id');
    if (userId) {
      this.http.post(`http://investme.runasp.net/api/Projects/increment/${projectId}`, Number(userId))
        .pipe(
          tap(() => this.refreshProjects()),
          catchError(error => {
            console.error('Error incrementing interaction:', error);
            return throwError(() => new Error('Failed to increment interaction'));
          })
        ).subscribe();
    }
  }
  
  decrementInteraction(projectId: number): void {
    const userId = localStorage.getItem('id');
    if (userId) {
      this.http.post(`http://investme.runasp.net/api/Projects/decrement/${projectId}`, Number(userId))
        .pipe(
          tap(() => this.refreshProjects()),
          catchError(error => {
            console.error('Error decrementing interaction:', error);
            return throwError(() => new Error('Failed to decrement interaction'));
          })
        ).subscribe();
    }
  }
  
  addComment(projectId: number): void {
    const commentContent = this.commentForms[projectId].get('comment')?.value;
    const userId = localStorage.getItem('id');
    const userName = localStorage.getItem('Name');

    if (commentContent && userId && userName) {
      const newComment = {
        content: commentContent,
        createdDate: new Date().toISOString(),
        projectId: projectId,
        userId: Number(userId),
        userName: userName
      };

      this.http.post(`http://investme.runasp.net/api/Projects/${projectId}/comments`, newComment)
        .pipe(
          tap(() => this.refreshProjects()),
          catchError(error => {
            console.error('Error adding comment:', error);
            return throwError(() => new Error('Failed to add comment'));
          })
        ).subscribe();
    } else {
      console.warn('Comment content or userId or userName is missing.');
    }
  }

  addReply(commentId: number): void {
    const replyContent = this.replyContent[commentId];
    const userId = localStorage.getItem('id');
    const userName = localStorage.getItem('Name');

    if (replyContent && userId && userName) {
      const newReply = {
        content: replyContent,
        createdDate: new Date().toISOString(),
        commentId: commentId,
        userId: Number(userId),
        userName: userName
      };

      this.http.post(`http://investme.runasp.net/api/Projects/comments/${commentId}/replies`, newReply)
        .pipe(
          tap(() => this.refreshProjects()),
          catchError(error => {
            console.error('Error adding reply:', error);
            return throwError(() => new Error('Failed to add reply'));
          })
        ).subscribe();
    } else {
      console.warn('Reply content or userId or userName is missing.');
    }
  }

  refreshProjects(): void {
    this.getProjects().subscribe(projects => this.projects = projects);
  }

  toggleReplyForm(commentId: number): void {
    this.replyForms[commentId] = !this.replyForms[commentId];
  }

  showSupportForm(projectId: number): void {
    this.supportFormVisible[projectId] = true;
  }

  hideSupportForm(projectId: number): void {
    this.supportFormVisible[projectId] = false;
  }

  submitSupport(projectId: number): void {
    const supportData = this.supportForms[projectId].value;
    const investorId = localStorage.getItem('id');
    if (investorId && supportData.amount && supportData.contactMethod) {
      const supportRequest = {
        InvestorId: Number(investorId),
        Amount: supportData.amount,
        ContactMethod: supportData.contactMethod
      };

      console.log(supportRequest);
      
      this.http.post(`http://investme.runasp.net/api/Investor/${projectId}/support`, supportRequest)
        .pipe(
          tap(() => this.refreshProjects()),
          catchError(error => {
            console.error('Error submitting support:', error);
            return throwError(() => new Error('Failed to submit support'));
          })
        ).subscribe(() => {
          this.hideSupportForm(projectId);
          this.supportForms[projectId].reset();
        });
    } else {
      console.warn('Support amount or contact method is missing.');
    }
  }
}
