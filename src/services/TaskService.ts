import Task from "../entities/Task";
import AbstractService from "./AbstractService";

class TaskService extends AbstractService<Task> {
  constructor() {
    super(Task);
  }
}

export default new TaskService;