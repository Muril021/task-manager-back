import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import TaskService from '../services/TaskService';
import Task from '../entities/Task';

class TaskController {
  async index(req: Request, res: Response) {
    try {
      return res.status(200).json(await TaskService.getAll(req));
    } catch ({message}) {
      return res.status(500).json({message});
    }
  }

  async store(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty() === false) {
        return res.status(400).json({
          message: errors.array()
        });
      }
      
      const { body } = req;

      return res.status(201).json(await TaskService.create(body as Task));
    } catch ({message}) {
      return res.status(500).json({message});
    }
  }

  async show(req: Request, res: Response) {
    try {
      const task = await TaskService.findById(req.params.id) as any;
      if (!task) {
        return res.status(404).json({
          message: `Task ID ${req.params.id} not found!`,
        })
      }

      return res.status(200).json(task);
    } catch ({message}) {
      return res.status(500).json({message});
    }
  }

  async update(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (errors.isEmpty() === false) {
        return res.status(400).json({
          message: errors.array()
        })
      }

      const { body } = req;

      await TaskService.update(req.params.id, body as Task);
      return res.status(200).json({
        message: `Task ID ${req.params.id} updated successfully.`
      });
    } catch ({message}) {
      return res.status(500).json({message});
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      await TaskService.forceDelete(req.params.id);
      return res.status(200).json({
        message: `Task ID ${req.params.id} removed successfully.`
      });
    } catch ({message}) {
      return res.status(500).json({message});
    }
  }
}

export default new TaskController;