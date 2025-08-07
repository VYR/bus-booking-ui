import { Component, inject, OnInit, effect } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from '../../state/dashboard.actions';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent implements OnInit {
 // private store = inject(Store);

 // dashboard$ = this.store.select(state => state.dashboard);

  ngOnInit() {
    //this.store.dispatch(DashboardActions.loadDashboard());
  }
}
