import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { SafeUrlPipe } from 'src/app/Pipe/SafeUrlPipe.pipe';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-innovator-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, SafeUrlPipe],
  templateUrl: './innovator-projects.component.html',
  styleUrls: ['./innovator-projects.component.scss']
})
export class InnovatorProjectsComponent implements OnInit {
  projects: any[] = [];
  commentForms: { [key: string]: FormGroup } = {};
  replyForms: { [key: string]: boolean } = {};
  replyContent: { [key: string]: string } = {};
  
  constructor(private http: HttpClient, private fb: FormBuilder, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    const innovatorId = localStorage.getItem('id');
    
    this.http.get<any[]>(`http://investme.runasp.net/api/projects/${innovatorId}`).subscribe(
      data => {
        this.projects = data;
        this.projects.forEach(project => {
          this.commentForms[project.id] = this.fb.group({
            comment: ['']
          });
        });
      },
      error => {
        console.error("Failed to load projects", error);
      }
    );
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

  toggleReplyForm(commentId: string) {
    this.replyForms[commentId] = !this.replyForms[commentId];
  }

  addComment(projectId: string) {
    const commentContent = this.commentForms[projectId].get('comment')?.value;
    if (commentContent) {
      const newComment = { content: commentContent };

      this.http.post(`http://investme.runasp.net/api/comments/${projectId}`, newComment).subscribe(
        () => {
          this.loadProjects();  // Reload projects to update the comments
        },
        error => {
          console.error("Failed to add comment", error);
        }
      );
    }
  }

  addReply(commentId: string) {
    const replyContent = this.replyContent[commentId];
    if (replyContent) {
      const newReply = { content: replyContent };

      this.http.post(`http://investme.runasp.net/api/replies/${commentId}`, newReply).subscribe(
        () => {
          this.loadProjects();  // Reload projects to update the replies
        },
        error => {
          console.error("Failed to add reply", error);
        }
      );
    }
  }

  editProject(project: any) {
    const updatedProject = {
      name: project.name,
      description: project.description,
      videoUrl: project.videoUrl,
      topic: project.topic,
      investmentNeeded: project.investmentNeeded
    };

    this.http.put(`http://investme.runasp.net/api/projects/${project.id}`, updatedProject).subscribe(
      () => {
        this.loadProjects();  // Reload projects after successful update
      },
      error => {
        console.error("Failed to update project", error);
      }
    );
  }

  deleteProject(projectId: string) {
    this.http.delete(`http://investme.runasp.net/api/projects/${projectId}`).subscribe(
      () => {
        // Remove the deleted project from the local array
        this.projects = this.projects.filter(p => p.id !== projectId);
      },
      error => {
        console.error("Failed to delete project", error);
      }
    );
  }
}
