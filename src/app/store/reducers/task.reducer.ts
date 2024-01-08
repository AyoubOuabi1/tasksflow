import { createReducer, on } from '@ngrx/store';
import {Task} from "../../models/task/task.module";
import * as TaskActions from "../actions/task.action";
export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = createReducer(
  initialState,
  on(
    TaskActions.loadTasksSuccess,
    (state, { tasks }) => ({ ...state, tasks })),

);
