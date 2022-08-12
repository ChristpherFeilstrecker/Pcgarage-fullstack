import { Request, Response } from "express";
import VideosBusiness from "../business/VideosBusiness";

export class VideosController {

   public async videos(req: Request, res: Response) {
      try {

         const result = await VideosBusiness.videos();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar videos" })
         }
      }
   }

   public async addVideo(req: Request, res: Response) {
      try {
         const { nome, descricao, url } = req.body

         const result = await VideosBusiness.addVideo(
            nome,
            descricao,   
            url
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar video" })
         }
      }
   }

   public async deleteVideo(req: Request, res: Response) {
      try {
         const  id  = req.query.id

         const result = await VideosBusiness.deleteVideo(
            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar produto" })
         }
      }
   }

   public async editVideo(req: Request, res: Response) {
      try {
         const { id, nome, descricao, url } = req.body

         const result = await VideosBusiness.editVideo(
            id,
            nome,
            descricao,   
            url
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar video" })
         }
      }
   }

/*
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
         const { id } = req.body

         const result = await GalleriesBusiness.deleteGallerie(
            id
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

   
*/
}

export default new VideosController()