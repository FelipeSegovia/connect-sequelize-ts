import { DataTypes } from 'sequelize';
import { Column, Table, Model } from 'sequelize-typescript';
@Table({
  timestamps: true,
  tableName: 'tasks',
  modelName: 'Task',
})
class Task extends Model {
  @Column({
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  })
  declare id: string;

  @Column({
    type: DataTypes.STRING,
  })
  declare name: string;

  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  declare done: boolean;
}

export default Task;
