import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import * as TaskActions from './store/actions/task.action';
import { Observable } from 'rxjs';
import {Task} from "./models/task/task.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(state => state.task.tasks);
  }

  ngOnInit() {
    // Dispatch an action to load tasks when the component is initialized
    this.loadTasks();
  }

  loadTasks() {
    this.store.dispatch(TaskActions.loadTasks());
  }
}
