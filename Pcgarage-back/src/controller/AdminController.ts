import { Request, Response } from "express";
import AdminBusiness from "../business/AdminBusiness";

export class AdminController {

   public async admin(req: Request, res: Response) {
      try {

         const result = await AdminBusiness.admin();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao retornar administrador" })
         }
      }
   }

    public async addadmin(req: Request, res: Response) {
      try {
         const { nome, password } = req.body

         const result = await AdminBusiness.addadmin(
            nome,
            password
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

      public async login(req: Request, res: Response) {
      try {
         const { nome, password } = req.body
         const result = await AdminBusiness.login(nome, password);
         res.status(200).send(result);
      } catch (error) {
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "controller - Algo deu errado ao logar" })
        }
      }
   }

   public async deleteAdmin(req: Request, res: Response) {
      try {
         const  id  = req.query.id

         const result = await AdminBusiness.deleteAdmin(
            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar administrador" })
         }
      }
   }


}

export default new AdminController()