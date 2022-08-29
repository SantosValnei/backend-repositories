import { Router } from "express";
import { route } from "express/lib/router"

import auth from './middlewares/auth'

import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";
import RepositoriesController from "./controllers/RepositoriesController";

const routes = new Router();

routes.get('/hello', HelloController.index);


routes.use(auth)
// rotas Users
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

// rotas Repository
routes.get('/users/:user_id/repositories', RepositoriesController.index);
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.post('/users/:user_id/repositories', RepositoriesController.destroy);


export default routes;

