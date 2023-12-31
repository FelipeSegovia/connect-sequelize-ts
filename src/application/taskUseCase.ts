import { TaskRepositories } from '../domain/task/taskRepositories';
import { TaskEntity } from '../domain/task/taskEntity';

export class TaskUseCase {
  constructor(private readonly taskRepository: TaskRepositories) {}

  public getAll = async (): Promise<TaskEntity[] | null> => {
    return this.taskRepository.getAll();
  };

  public create = async (
    task: Partial<TaskEntity>
  ): Promise<TaskEntity | null> => {
    return this.taskRepository.create(task);
  };
  public findById = async (id: string): Promise<TaskEntity | null> => {
    return this.taskRepository.findById(id);
  };

  public update = async (
    id: string,
    task: Partial<TaskEntity>
  ): Promise<number[] | null> => {
    return this.taskRepository.update(id, task);
  };

  public delete = async (id: string): Promise<string | null> => {
    return this.taskRepository.delete(id);
  };
}
