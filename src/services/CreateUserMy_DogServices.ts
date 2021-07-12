import { getCustomRepository } from "typeorm";
import { UserMy_DogRepositories } from "../repositories/UserMy_DogRepositories";
import { hash } from "bcryptjs";

//minha tipage
interface IUserMy_Dog {
  username: string;
  email: string;
  password: string;
}

class CreateUserMy_DogServices {
  async execute({ username, email, password }: IUserMy_Dog) {
    const userMy_DogRepositories = getCustomRepository(UserMy_DogRepositories);

    if (!email) {
      throw new Error("Email Incorrected !");
    }
    //verificar se exiti user msm name
    const userMy_DogAlreadyExists = await userMy_DogRepositories.findOne({ email });
    //console.log(userMy_DogAlreadyExists)
    if (userMy_DogAlreadyExists) {
      throw new Error("Ops email UserMy_DogAlreadyExists !");
    }
   
    const passwordHash = await hash(password, 8);

    const userMy_Dog = userMy_DogRepositories.create({
      username,
      email,
      password: passwordHash,
      
    });

    await userMy_DogRepositories.save(userMy_Dog);
    return {userMy_Dog};
  }
}

export { CreateUserMy_DogServices };
