import { getCustomRepository } from "typeorm";
import { UserMy_DogRepositories } from "../repositories/UserMy_DogRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { secreet } from "../config/auth.json";

//tipagem
interface IAuthAuthenticateRequest {
  username?: string;
  email: string;
  password: string;
}

class AuthenticateService {
  async execute({ username, email, password }: IAuthAuthenticateRequest) {
    const userMy_DogRepositorie = getCustomRepository(UserMy_DogRepositories);
    if (!email) {
      throw new Error("Email Incorrected! ");
    }
    const userMy_Dog = await userMy_DogRepositorie.findOne({
      email,
    });
    if (!userMy_Dog) {
      throw new Error("Email/Incorrected !");
    }
    const passwordMatch = await compare(password, userMy_Dog.password);
    if (!passwordMatch) {
      throw new Error("Password/Incorrected !");
    }
    const token = sign({
        email: userMy_Dog.email,
        username: userMy_Dog.username,
      },
      secreet,
      {
        subject: userMy_Dog.idUsersMydog,
        expiresIn: "1d",
      }
    );
    return { username, email, token };
  }
}
export { AuthenticateService };
