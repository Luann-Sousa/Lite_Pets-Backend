import { Router } from 'express';
import { CreateMy_DogController } from './controllers/CreateMy_DogController';
import { UserMy_DogController } from './controllers/CreateUserMy_DogController';
import { ListingAllMy_DogController } from './controllers/ListingAllMy_DogController';

//instânciando nosso methodo de dentro de controlller
const createmy_dogController = new CreateMy_DogController();
const userMy_DogController = new UserMy_DogController();
const listingAllMy_DogController = new ListingAllMy_DogController();

const routes = Router();//iniciando nossas rotas

routes.get("/index", listingAllMy_DogController.handle);//listing users
routes.post("/create", createmy_dogController.handle);//create user dog
routes.post("/create/user_dog", userMy_DogController.handle);

export default routes ;