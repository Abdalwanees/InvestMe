import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectDto } from '../Interfaces/Reply';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreServiceService {
  private baseUrl = 'http://investme.runasp.net/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<ProjectDto[]> {
    return this.http.get<ProjectDto[]>(`${this.baseUrl}/Projects`);
  }
}
