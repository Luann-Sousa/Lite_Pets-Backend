import { Request, Response } from 'express';
import { CreateUserMy_DogServices } from '../services/CreateUserMy_DogServices'; 

class UserMy_DogController{

  async handle(request: Request, response: Response){
    const { username, email, password } = request.body;
    const createUserMy_DogServices = new CreateUserMy_DogServices();

    const userMy_Dog = await createUserMy_DogServices.execute({
      username,
      email,
      password,
    });

    return response.json(userMy_Dog);
  }
};

export { UserMy_DogController };