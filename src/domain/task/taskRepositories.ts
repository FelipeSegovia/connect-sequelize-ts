import { TaskEntity } from './taskEntity';

export interface TaskRepositories {
  getAll(): Promise<TaskEntity[] | null>;
  create(task: Partial<TaskEntity>): Promise<TaskEntity | null>;
  findById(id: string): Promise<TaskEntity | null>;
  update(id: string, task: Partial<TaskEntity>): Promise<number[] | null>;
  delete(id: string): Promise<string | null>;
}
