import { createAction, props } from '@ngrx/store';
import {Task} from "../../models/task/task.module";


export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>()
);
