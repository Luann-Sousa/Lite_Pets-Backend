import { Request, Response } from 'express';
import { CreateMy_DogServices } from '../services/CreateMy_DogServices';

class CreateMy_DogController {
  async handle(request: Request, response: Response){
    const { name, raca } = request.body;

    const my_dogService = new CreateMy_DogServices();
    const my_dog = await my_dogService.execute({name, raca})
    return response.json(my_dog);
  }
}

export { CreateMy_DogController };