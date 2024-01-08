export interface Task {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: TaskStatus;
  assigneeId: number;
  createdById: number;
}

export enum TaskStatus {
  ToDo = 'TO_DO',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE',
}
