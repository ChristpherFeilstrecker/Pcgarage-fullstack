import BaseDataBase from "./BaseDatabase";

export class GalleriesDatabase extends BaseDataBase {

   protected tableName: string = "pcgarage_galerias";

   
   public async getGalleries(): Promise<void | any> {
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

   public async editGallerie(
      id: String,
      nome: String,
      descricao: String,
      imagem: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`nome\`="${nome}", \`descricao\`="${descricao}", \`imagem\`="${imagem}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }
  
 
  

   public async addGallerie(
      id: String,
      nome: String,
      descricao: String,
      imagem: String
   ): Promise<void> {
      try {

         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, nome, descricao, imagem)
            VALUES (
            '${id}', 
            '${nome}', 
            '${descricao}',
            '${imagem}'
            )`
         );
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
         }
         
      }
   }

   public async deleteGallerie(
      id: String
        
     ): Promise<void | any> {
      try {
         
         let query = `DELETE FROM \`${this.tableName}\` WHERE \`id\`="${id}";`
      
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