import { HighlightsDatabase } from "../data/HighlightsDatabase";

export class HighlightsBusiness {

   constructor(
      private highlightsDatabase: HighlightsDatabase,
   ) {

   }
   public async highlights() {
      try {

         const highlights = await this.highlightsDatabase.getHighlights();

         if (!highlights || highlights.length === 0) {

            throw new Error("BD - Erro ao retornar destaques");
         }

         return (highlights);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar destaques")
         }
      }
   }

   public async editHighlights(
      id: String,
      id_galeria: String,
      nome: String,
      descricao: String,
      preco: String,
      imagem: String
   ) {
      try {

         if (!id ) {
            throw new Error("Business - Necessário informar ID");
         }

         if (!id_galeria) {
            throw new Error("Business - Necessário informar id da galeria");
         }

         if (!nome || !descricao  || !preco || !imagem ) {
            throw new Error("Business - Necessário informar atributos para editar");
         }
         
            const highlights = await this.highlightsDatabase.editHighlight(
               id,
               id_galeria,
               nome,
               descricao,
               preco,
               imagem
            );
         
         return ("Business - Destaque editado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar destaque")
         }
      }
   }


   
}
export default new HighlightsBusiness(
   new HighlightsDatabase(),
)