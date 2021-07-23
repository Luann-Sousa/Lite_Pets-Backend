import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const temFolder = path.resolve(__dirname, "..", '..', "temp"); //onde vai ser salvo o arquivo

export default {
  directory: temFolder,
  //storage e onde vamos configura o nome e o destino do file pra onde ele vaii
  storage: multer.diskStorage({
    destination: temFolder,
    filename(request, file, callback){
      const fileHash = crypto.randomBytes(10).toString("hex");
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    }
  })
}