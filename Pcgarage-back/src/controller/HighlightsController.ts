import { Request, Response } from "express";
import HighlightsBusiness from "../business/HighlightsBusiness";

export class HighlightsController {

   public async highlights(req: Request, res: Response) {
      try {
         const result = await HighlightsBusiness.highlights();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar destaques" })
         }
      }
   }

   public async editHighlights(req: Request, res: Response) {
      try {
         const { id, id_galeria, nome, descricao, preco, imagem } = req.body

         const result = await HighlightsBusiness.editHighlights(
            id,
            id_galeria,
            nome,
            descricao,
            preco,
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar destaque" })
         }
      }
   }



}

export default new HighlightsController()