import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';
import { Project } from '../Interfaces/Project';
import { CommentDto } from '../Interfaces/CommentDto';
import { ReplyDto } from '../Interfaces/ReplyDto';
// import { environment } from '../environments/environment';
// import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  addComment(projectId: number, comment: CommentDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/${projectId}/comments`, comment);
  }

  addReply(commentId: number, reply: ReplyDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/comments/${commentId}/replies`, reply);
  }
}
