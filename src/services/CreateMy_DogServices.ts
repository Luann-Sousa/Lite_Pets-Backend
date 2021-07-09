import { getCustomRepository } from 'typeorm';
import { My_DogRepositories } from '../repositories/My_DogRepositories';

//minha tipage User
interface IMy_Dog{
  name: string;
  breed: string;
};

class CreateMy_DogServices{
  async execute({name, breed}: IMy_Dog){
    const my_DogRepositories = getCustomRepository( My_DogRepositories );
 
    if(!name){
      throw new Error("Name Incorrected !");
    };
    //caso tenha dog mesmo nome não deixar criar outro
    const my_dogAlreadyExists = await my_DogRepositories.findOne({name});

    if(my_dogAlreadyExists){
      throw new Error("My_Dog is AlredyExists!");
    };
    const my_dog = my_DogRepositories.create({
      name, breed
});
    await my_DogRepositories.save(my_dog);
    return my_dog;
  };
};

export { CreateMy_DogServices };