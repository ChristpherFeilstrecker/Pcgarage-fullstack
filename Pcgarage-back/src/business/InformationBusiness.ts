import { InformationDatabase } from "../data/InformationDataBase";

export class InformationBusiness {

   constructor(
      private informationDatabase: InformationDatabase,
   ) {

   }
   public async information() {
      try {

         const info = await this.informationDatabase.getInformations();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar informações");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar informações")
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

   ) {
      try {

         if (!id ) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         
            const highlights = await this.informationDatabase.editInformation(
               id,
               telefone,
               celular,
               email,
               endereco,
               facebook,
               instagram,
               youtube
            );
      
         return ("Business - Informações editadas com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar informações")
         }
      }
   }


   
}
export default new InformationBusiness(
   new InformationDatabase(),
)