import { Request, Response } from "express";
import InformationBusiness from "../business/InformationBusiness";

export class InformationController {

   public async information(req: Request, res: Response) {
      try {

         const result = await InformationBusiness.information();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao retornar informações" })
         }
      }
   }

   public async editInformation(req: Request, res: Response) {
      try {
         const {id, telefone, celular, email, endereco, facebook, instagram,youtube } = req.body

         const result = await InformationBusiness.editInformation(
            id,
            telefone, 
            celular, 
            email, 
            endereco, 
            facebook, 
            instagram,
            youtube
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar informações" })
         }
      }
   }

}

export default new InformationController()