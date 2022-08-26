import BaseDataBase from "./BaseDatabase";

export class InformationDatabase extends BaseDataBase {

   protected tableName: string = "pcgarage_informacoes";

   
   public async getInformations(): Promise<void | any> {
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

   public async editInformation(
      id: String,
      telefone: String,
      celular: String,
      email: String,
      endereco: String,
      facebook: String,
      instagram: String,
      youtube: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`telefone\`="${telefone}", \`celular\`="${celular}", \`email\`="${email}", \`endereco\`="${endereco}", \`facebook\`="${facebook}", \`instagram\`="${instagram}", \`youtube\`="${youtube}" WHERE \`id\`="${id}";`
  
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