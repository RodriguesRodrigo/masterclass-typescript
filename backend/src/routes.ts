import Router from 'express';

import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('hello world 1');
});
routes.get('/users', UserController.index);
routes.post('/users/create', UserController.create);

export default routes;
