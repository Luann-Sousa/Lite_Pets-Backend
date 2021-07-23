import { Router } from "express";
import { ListingAllMy_DogController } from "./controllers/ListingAllMy_DogController";
import { CreateMy_DogController } from "./controllers/CreateMy_DogController";
import { UserMy_DogController } from "./controllers/CreateUserMy_DogController";
import { AuthenticateMy_UserController } from "./controllers/AuthenticateMy_UserController";

import { ensureAuthenticated  } from './middlewares/ensureAuthenticated';
import multerConfig  from './config/upload';
import multer from 'multer';
//instânciando nosso methodo de dentro de controlller
const listingAllMy_DogController = new ListingAllMy_DogController();
const createmy_dogController = new CreateMy_DogController();
const userMy_DogController = new UserMy_DogController();
const authenticateMy_UserController = new AuthenticateMy_UserController();

const routes = Router(); //iniciando nossas rotas

const upload = multer(multerConfig);

routes.get("/index", ensureAuthenticated ,listingAllMy_DogController.handle); //listing users
routes.post("/create", upload.single('image'),createmy_dogController.handle); //create dog
routes.post("/create/user_dog", userMy_DogController.handle); // create user dog
routes.post("/create/singin", authenticateMy_UserController.handle); // create token e logando user

export default routes;
