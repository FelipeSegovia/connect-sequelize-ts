import { Sequelize } from 'sequelize-typescript';
// @ts-ignore
import * as config from './config';

const sequelize = new Sequelize({ ...config });

export default sequelize;
