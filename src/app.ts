import express, { Express } from 'express';
import morgan from 'morgan';
import sequelize from './infrastructure/db/config/sequelize';
import { models } from './infrastructure/db/models';
import taskRoute from './infrastructure/routes/taskRoute';

async function runApp() {
  const app: Express = express();

  // * add models
  sequelize.addModels([...models]);

  // * running sequelize connection
  await sequelize
    .sync({ alter: true })
    .then(() => console.log('Inicializando conexión con base de datos'))
    .catch((error) => {
      console.error('------------ BASE DE DATOS NO EXISTE ----------');
      throw error.message;
    });

  // * config app
  app.use(express.json());
  app.use(morgan('common'));

  // * routes
  app.use(taskRoute);

  return app;
}

export default runApp;
