import { TaskEntity } from '../../../../domain/task/taskEntity';

const mockTask: TaskEntity = {
  name: 'Task 1',
};

describe('testing TaskEntity', () => {
  it('should be have attributes from TaskEntity', () => {
    expect(mockTask.name).toBe('Task 1');
  });

  it('should be have types attributes of TaskEntity', () => {
    expect(typeof mockTask.name).toBe('string');
  });

  it('should fail with incorrect type from the name property', () => {
    // @ts-expect-error
    const invalidNameType: number = {} as TaskEntity['name'];
  });
});
