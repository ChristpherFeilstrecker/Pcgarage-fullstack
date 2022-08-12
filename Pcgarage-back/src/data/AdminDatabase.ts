import BaseDataBase from "./BaseDatabase";

export class AdminDatabase extends BaseDataBase {

   protected tableName: string = "pc_garage_admin";

   
   public async getAdmin(): Promise<void | any> {
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
   public async getUserByName(
      nome: String
   ): Promise<void | any> {
      try {
 
         let query = `SELECT * from \`${this.tableName}\` WHERE \`nome\`="${nome}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );

         return result[0]
         
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

   public async addAdmin(
      id: String,
      nome: String,
      senha: String
   ): Promise<void> {
      try {

         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, nome, senha)
            VALUES (
            '${id}', 
            '${nome}', 
            '${senha}'
            )`
         );
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
         }
         
      }
   }

   public async deleteAdmin(
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