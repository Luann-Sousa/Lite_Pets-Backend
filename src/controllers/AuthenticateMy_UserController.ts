import { Request, Response } from 'express';
import { AuthenticateService } from '../services/CreateAuthenticateServices';

class AuthenticateMy_UserController {
  async handle(resquest: Request, response: Response){
    const { username, email, password } = resquest.body;
    const authenticateService = new AuthenticateService();
    const token = await authenticateService.execute({
      username,
      email,
      password,
    });
    return response.status(201).json(token)
  }
};
export { AuthenticateMy_UserController };