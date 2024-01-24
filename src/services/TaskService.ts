import { FindManyOptions } from "typeorm";
import Task from "../entities/Task";
import AbstractService from "./AbstractService";

class TaskService extends AbstractService<Task> {
  constructor() {
    super(Task);
  }

  getAllTasksFavorites(): Promise<Task[]> {
    return this.repository.find({
        order: {
          created_at: 'desc',
        } as object,
        where: {
          is_favorited: true,
        },
    } as FindManyOptions<Task>);
  }

  getAllTasksWithoutFavorites(): Promise<Task[]> {
    return this.repository.find({
        order: {
          created_at: 'desc',
        } as object,
        where: {
          is_favorited: false,
        },
    } as FindManyOptions<Task>);
  }
}

export default new TaskService;