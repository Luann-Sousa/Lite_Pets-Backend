import { Request, Response } from 'express';
import { ListingAllMy_DogServices } from '../services/ListingAllMy_DogServices';


class ListingAllMy_DogController{
  async handle(request: Request, response: Response ){
  
    try {
      const listingAllMy_DogController = new ListingAllMy_DogServices();
      const my_dogs = await listingAllMy_DogController.execute();

      return response.status(201).json(my_dogs);

    } catch (error) {
      if(error){
       return response.status(400).json({
         error: true,
         message: "sorry we could not get any results from any data in your database !"
       });
      }
    };

  }
};

export { ListingAllMy_DogController };