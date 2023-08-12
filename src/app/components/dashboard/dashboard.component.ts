import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserDataAction } from 'src/app/state/actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store) { 
  }

  ngOnInit() {
    this.getListofUsers();
  }

  getListofUsers() {
    console.log ("getting called ");
    this.store.dispatch(new GetUserDataAction());
  }
}
