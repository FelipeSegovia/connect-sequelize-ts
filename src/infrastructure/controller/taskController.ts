import { Request, Response, NextFunction } from 'express';
import { TaskUseCase } from '../../application/taskUseCase';

export class TaskController {
  constructor(private readonly taskUseCase: TaskUseCase) {}

  public getAll = async (req: Request, res: Response, _: NextFunction) => {
    try {
      res.send(await this.taskUseCase.getAll()).status(200);
    } catch (err) {
      res.status(404).send('Recurso no disponible');
    }
  };

  public findById = async (req: Request, res: Response, _: NextFunction) => {
    try {
      res.send(await this.taskUseCase.findById(req.params.id)).status(200);
    } catch (err) {
      res.status(404).send('Recurso no disponible');
    }
  };
  public update = async (req: Request, res: Response, _: NextFunction) => {
    try {
      res
        .send(
          await this.taskUseCase
            .update(req.params.id, req.body)
            .then(async () => await this.taskUseCase.findById(req.params.id))
        )
        .status(200);
    } catch (err) {
      res.status(404).send('Recurso no disponible');
    }
  };

  public create = async (req: Request, res: Response, _: NextFunction) => {
    try {
      res.send(await this.taskUseCase.create(req.body)).status(201);
    } catch (errr) {
      res.status(404).send('Recurso no disponible');
    }
  };

  public delete = async (req: Request, res: Response, _: NextFunction) => {
    try {
      await this.taskUseCase.delete(req.params.id).then(() => res.send(200));
    } catch (err) {
      res.status(404).send('Recurso no disponible');
    }
  };
}
