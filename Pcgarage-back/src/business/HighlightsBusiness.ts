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
      nome: String,
      descricao: String,
      preco: String,
      imagem: String
   ) {
      try {

         if (!id ) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         if (!nome && !descricao  && !preco && !imagem ) {
            throw new Error("Business - Necessário informar no mínimo um atributo para editar");
         }
         
         if(nome){
            const highlights = await this.highlightsDatabase.editHighlightNome(
               id,
               nome
            );
         }

         if(descricao){
            const highlights = await this.highlightsDatabase.editHighlightDescricao(
               id,
               descricao
            );
         }

         if(preco){
            const highlights = await this.highlightsDatabase.editHighlightPreco(
               id,
               preco
            );
         }

         if(imagem){
            const highlights = await this.highlightsDatabase.editHighlightImagem(
               id,
               imagem
            );
         }

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