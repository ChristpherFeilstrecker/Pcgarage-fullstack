import { Request, Response } from "express";
import ProductsBusiness from "../business/ProductsBusiness";

export class ProductsController {

   public async products(req: Request, res: Response) {
      try {
         const test = ""

         const result = await ProductsBusiness.products();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar produtos" })
         }
      }
   }

   public async editProduct(req: Request, res: Response) {
      try {
         const { id, id_galeria, nome, descricao, observacao, imagem1,imagem2,imagem3,imagem4,imagem5 } = req.body

         const result = await ProductsBusiness.editProduct(
            id,
            id_galeria,
            nome,
            descricao,  
            observacao, 
            imagem1,
            imagem2,
            imagem3,
            imagem4,
            imagem5
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar produto" })
         }
      }
   }

   public async addProduct(req: Request, res: Response) {
      try {
         const { id_galeria, nome, descricao, observacao, imagem1 } = req.body

         const result = await ProductsBusiness.addProduct(
            id_galeria,
            nome,
            descricao,  
            observacao, 
            imagem1
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar produto" })
         }
      }
   }

   public async addImgProduct(req: Request, res: Response) {
      try {
         const { id, imagem2,imagem3,imagem4,imagem5} = req.body

         const result = await ProductsBusiness.addImgProduct( 
            id,
            imagem2,
            imagem3,
            imagem4,
            imagem5
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar produto" })
         }
      }
   }

   public async deleteImgProduct(req: Request, res: Response) {
      try {
         const { id, imagem} = req.body

         const result = await ProductsBusiness.deleteImgProduct( 
            id,
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar imagem de produto" })
         }
      }
   }

   public async deleteProduct(req: Request, res: Response) {
      try {
         const  id  = req.query.id

         const result = await ProductsBusiness.deleteProduct(
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


}

export default new ProductsController()