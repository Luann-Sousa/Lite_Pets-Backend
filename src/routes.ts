import express from 'express';
const routes = express.Router();

routes.get("/test", (req, res)=>{
  return res.json({ok: "ok deu certo amigo"})
});


export default routes ;