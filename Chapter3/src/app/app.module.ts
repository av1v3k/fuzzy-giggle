import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from
  '@angular/platform-browser/animations';
  import { ReactiveFormsModule } from '@angular/forms';

import { IssueListComponent } from './issue-list/issue-list.component';
import { ClarityModule } from '@clr/angular';
import { IssueReportComponent } from './issue-report/issue-report.component';

  
@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
