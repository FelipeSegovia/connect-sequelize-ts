import { TaskUseCase } from '../../../application/taskUseCase';
import { TaskRepositories } from '../../../domain/task/taskRepositories';
import { TaskEntity } from '../../../domain/task/taskEntity';

const taskRepositoryMock: TaskRepositories = {
  getAll: jest.fn(),
  create: jest.fn(),
  findById: jest.fn().mockReturnValue(Promise<TaskEntity | null>),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('Testing use case Task', () => {
  it('testing getAll', async () => {
    const taskUseCase = new TaskUseCase(taskRepositoryMock);

    await taskUseCase.getAll();

    expect(taskRepositoryMock.getAll).toHaveBeenCalled();
    expect(taskRepositoryMock.delete).toBeDefined();
    expect(typeof (await taskRepositoryMock.findById(''))).toBe('function');
  });
});
