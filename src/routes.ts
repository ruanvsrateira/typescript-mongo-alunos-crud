import { Request, Response, Router }  from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id/delete', UserController.delete)
routes.post('/users/:id/edit', UserController.edit);

export default routes;