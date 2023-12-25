import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IssueForm } from '../Interface/issue-form';
import { Issue } from '../Interface/issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent {

  @Output() formClose = new EventEmitter();

  issueForm = new FormGroup<IssueForm>({
    title: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    priority: new FormControl('', { nonNullable: true }),
    type: new FormControl('', { nonNullable: true })
  });

  constructor(private issueService: IssuesService) { }

  addIssue() {
    this.issueService.createIssue(this.issueForm.getRawValue() as Issue);
    this.formClose.emit();
  }  

  
}
