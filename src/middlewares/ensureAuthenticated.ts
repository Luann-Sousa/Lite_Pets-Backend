import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { secreet } from '../config/auth.json';

//tipagem IPayload
interface IPayload{
  sub: string;
};
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  const authToken = request.headers.authorization;
  if(!authToken){
    return response.status(401).json({
      error: true,
      message: "No token foi returned for headers !",
    });
  };

 if(authToken.length == undefined || authToken.length == 1){
  return response.status(401).json({
    error: true,
    message: "token does not have both parts as default try later!",
  });
 };
 // separar token Bearer 0b307ba5e9c6bb5e04528bb57925b471
 const [ scheme, token] = authToken.split(" ");

 if (!/^Bearer$/i.test(scheme)) {
  return response.status(401).send({ error: 'Token malFormatted' });
};

 try {
  const { sub } = verify(token, secreet ) as IPayload;
 // console.log(sub)
  request.userIdMy_Dog = sub;

 } catch (error) {
  if(error){

    return response.status(401).json({
      error: true,
      message: "AuthToken Incorreted",
    });
  };
 };
 return next();
};