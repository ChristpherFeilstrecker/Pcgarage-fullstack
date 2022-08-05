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

   public async editHighlightNome(
    id: String,
    nome: String
      
   ): Promise<void | any> {
    try {
   let query = `UPDATE \`pcgarage_destaque\` SET \`nome\`="${nome}" WHERE \`id\`="${id}";`

       const result = await BaseDataBase.connection.raw(
         query
       );


    } catch (error) {

       if (error instanceof Error) {
          throw new Error(error.message)
       }
    }
 }

 public async editHighlightDescricao(
    id: String,
    descricao: String
      
   ): Promise<void | any> {
    try {
      let query = `UPDATE \`pcgarage_destaque\` SET \`descricao\`="${descricao}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );

    } catch (error) {
       if (error instanceof Error) {
          throw new Error(error.message)
       }
    }
 }

 public async editHighlightPreco(
    id: String,
    preco: String
      
   ): Promise<void | any> {
    try {
      let query = `UPDATE \`pcgarage_destaque\` SET \`preco\`="${preco}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );

    } catch (error) {
       if (error instanceof Error) {
          throw new Error(error.message)
       }
    }
 }

 public async editHighlightImagem(
    id: String,
    imagem: String
      
   ): Promise<void | any> {
    try {
      let query = `UPDATE \`pcgarage_destaque\` SET \`imagem\`="${imagem}" WHERE \`id\`="${id}";`
  
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