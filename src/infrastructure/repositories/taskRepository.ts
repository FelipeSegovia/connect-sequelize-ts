import { TaskRepositories } from '../../domain/task/taskRepositories';
import { TaskEntity } from '../../domain/task/taskEntity';
import Task from '../db/models/task';

export class TaskRepositoryImpl implements TaskRepositories {
  async findById(id: string): Promise<TaskEntity | null> {
    return await Task.findByPk(id);
  }

  async getAll(): Promise<TaskEntity[] | null> {
    return await Task.findAll();
  }

  async create(task: Partial<TaskEntity>): Promise<TaskEntity | null> {
    return await Task.create({ ...task });
  }

  async delete(id: string): Promise<string | null> {
    const taskDeleted = await Task.destroy({ where: { id: id } });

    return `Task deleted ${taskDeleted}`;
  }

  async update(id: string, task: TaskEntity): Promise<number[] | null> {
    return await Task.update(
      { ...task },
      {
        where: {
          id: id,
        },
      }
    );
  }
}
