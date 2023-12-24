import { Injectable } from '@angular/core';
import { Issue } from './Interface/issue';
import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: Issue[] = [];

  constructor() {
    this.issues = issues;
   }

  
  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }
}
