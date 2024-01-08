import { ActionReducerMap } from '@ngrx/store';
import * as fromTask from './reducers/task.reducer';

export interface AppState {
  task: fromTask.TaskState;
}

export const reducers: ActionReducerMap<AppState> = {
  task: fromTask.taskReducer,
};
