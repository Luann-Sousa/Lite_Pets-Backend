import { Router } from 'express';
import { CreateMy_DogController } from './controllers/CreateMy_DogController';
const createmy_dogController = new CreateMy_DogController();
const routes = Router();


routes.post("/create", createmy_dogController.handle);


export default routes ;