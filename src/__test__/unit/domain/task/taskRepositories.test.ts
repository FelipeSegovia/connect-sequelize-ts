import { TaskRepositories } from '../../../../domain/task/taskRepositories';
import { TaskEntity } from '../../../../domain/task/taskEntity';

class TaskRepositoriesTest implements TaskRepositories {
  create(task: Partial<TaskEntity>): Promise<TaskEntity | null> {
    return Promise.resolve(null);
  }

  delete(id: string): Promise<string | null> {
    return Promise.resolve('delete');
  }

  findById(id: string): Promise<TaskEntity | null> {
    return Promise.resolve(null);
  }

  getAll(): Promise<TaskEntity[] | null> {
    return Promise.resolve([
      {
        name: 'task 1',
      },
    ]);
  }

  update(id: string, task: Partial<TaskEntity>): Promise<number[] | null> {
    return Promise.resolve(null);
  }
}

describe('TaskRepositories test', () => {
  it('should pass with correct implementation', async () => {
    const instance: TaskRepositories = new TaskRepositoriesTest();

    const result = await instance.getAll();

    expect(result.length).toBe(1);
    expect(typeof result).toBe('object');
  });
});
