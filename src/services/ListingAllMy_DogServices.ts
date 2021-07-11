import { getCustomRepository  } from "typeorm";
import { My_DogRepositories } from '../repositories/My_DogRepositories';

class ListingAllMy_DogServices {

  async execute(){
    try {
      const my_DogRepositories = getCustomRepository(My_DogRepositories);

      const my_dogs = await my_DogRepositories.find();
      if(!my_dogs){
        throw new Error(" sorry we could not get any results from any data in your database !");
      }

      return my_dogs;
      
    } catch (error) {
      if(error){
        throw new Error("sorry we could not get any results from any data in your database !");
      }
    }
  }

}

export { ListingAllMy_DogServices };