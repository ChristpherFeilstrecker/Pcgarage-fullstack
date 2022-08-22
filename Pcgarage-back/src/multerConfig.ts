import { buildArgv } from 'jest-cli/build/cli';
import multer from 'multer';
import path from 'path'

export const storage = multer.diskStorage({
    destination:(req, file,cb)=>{
        cb(null,path.resolve("../../www/uploads"));
    },
    filename: (req,file,cb)=>{
        const time = new Date().getTime();

        cb(null, `${time}_${file.originalname}`)
    }
})
