import "reflect-metadata";
import "express-async-errors";//pronto aqui exepress ja conseque trabalhar com errors async 
import express from 'express';
import { NextFunction, Request, Response } from 'express';//trazendo nosso express
import './database';
import routes from './routes';



const app = express();

app.use(express.json());
 
app.use(routes);

//midlewares de error obrigatorio 4 parametros
//*se estiver Error => vem prencheido , req, res, NextFunction => tudo deu certo prossigar
app.use( (err: Error, request: Request, response: Response, next: NextFunction) =>{
  //vamos verificar se oque vem no Error e do tipo Throw new Error .. por que pode ser outro erro qu esta chegando
  if( err instanceof Error){
    return response.status(400).json({
      error: err.message
    });
  }
  //caso seja outro tipo de error vamos definir um Status 500
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });

});
app.listen(3330, () => console.log(" Start is runing !") );