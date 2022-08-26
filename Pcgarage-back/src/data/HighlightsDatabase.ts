import idGenerator from "../services/idGenerator";
import BaseDataBase from "./BaseDatabase";

export class HighlightsDatabase extends BaseDataBase {

   protected tableName: string = "pcgarage_destaque";

   public async getHighlights(): Promise<void | any> {
      try {
         const result = await BaseDataBase.connection.raw(`
         SELECT * from ${this.tableName};
         `);

         return result[0]
         
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

   public async getHighlightById(
    id: String
   ): Promise<void | any> {
    try {
       const result = await BaseDataBase.connection.raw(`
       SELECT * from "pcgarage_destaque";
       `);

       return result[0]
       
    } catch (error) {
       if (error instanceof Error) {
          throw new Error(error.message)
       }
    }
 }

 public async editHighlight(
   id: String,
   id_galeria: String,
   nome: String,
   descricao: String,
   preco: String,
   imagem: String
   
  ): Promise<void | any> {
   try {
  let query = `UPDATE \`pcgarage_destaque\` SET \`id_galeria\`="${id_galeria}", \`nome\`="${nome}", \`descricao\`="${descricao}", \`preco\`="${preco}", \`imagem\`="${imagem}" WHERE \`id\`="${id}";`

      const result = await BaseDataBase.connection.raw(
        query
      );

   } catch (error) {

      if (error instanceof Error) {
         throw new Error(error.message)
      }
   }
}

 

 


}