import { Request, Response } from "express";
import GalleriesBusiness from "../business/GalleriesBusiness";

export class GalleriesController {

   public async galleries(req: Request, res: Response) {
      try {
         const test = ""

         const result = await GalleriesBusiness.galleries();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar galerias" })
         }
      }
   }

   public async editGallerie(req: Request, res: Response) {
      try {
         const { id, nome, descricao, imagem } = req.body

         const result = await GalleriesBusiness.editGallerie(
            id,
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar galeria" })
         }
      }
   }

   public async addGallerie(req: Request, res: Response) {
      try {
         const { nome, descricao, imagem } = req.body

         const result = await GalleriesBusiness.addGallerie(
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar galeria" })
         }
      }
   }

   public async deleteGallerie(req: Request, res: Response) {
      try {
         const  id  = req.query.id
        
         const result = await GalleriesBusiness.deleteGallerie(
            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar galeria" })
         }
      }
   }

   

}

export default new GalleriesController()