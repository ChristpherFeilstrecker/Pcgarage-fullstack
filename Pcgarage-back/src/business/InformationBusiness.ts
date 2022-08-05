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
      endereco: String

   ) {
      try {

         if (!id ) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         if (!telefone && !celular && !email  && !endereco ) {
            throw new Error("Business - Necessário informar no mínimo um atributo para editar");
         }

         if(telefone){
            const highlights = await this.informationDatabase.editInformationTelefone(
               id,
               telefone
            );
         }
         
         if(celular){
            const highlights = await this.informationDatabase.editInformationCelular(
               id,
               celular
            );
         }

         if(email){
            const highlights = await this.informationDatabase.editInformationEmail(
               id,
               email
            );
         }

         if(endereco){
            const highlights = await this.informationDatabase.editInformationEndereco(
               id,
               endereco
            );
         }


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