import { Router } from 'express';
import TaskController from './controllers/TaskController';
import TaskValidation from './validations/TaskValidation';

const router = Router();

router.get('/tasks', TaskController.index);
router.post('/tasks', TaskValidation.validate, TaskController.store);
router.get('/tasks/:id', TaskController.show);
router.put('/tasks/:id', TaskValidation.validate, TaskController.update);
router.delete('/tasks/:id', TaskController.destroy);

export default router;