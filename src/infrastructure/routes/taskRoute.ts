import { Router } from 'express';
import { TaskRepositoryImpl } from '../repositories/taskRepository';
import { TaskUseCase } from '../../application/taskUseCase';
import { TaskController } from '../controller/taskController';

const router = Router();

const taskRepo = new TaskRepositoryImpl();

const taskUseCase = new TaskUseCase(taskRepo);

const taskController = new TaskController(taskUseCase);

router.get('/tasks', taskController.getAll);
router.get('/tasks/:id', taskController.findById);
router.post('/tasks', taskController.create);
router.put('/tasks/:id', taskController.update);
router.delete('/tasks/:id', taskController.delete);

export default router;
