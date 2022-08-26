import { GalleriesDatabase } from "../data/GalleriesDatabase";
import { IdGenerator } from "../services/idGenerator";

export class GalleriesBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private galleriesDatabase: GalleriesDatabase,
   ) {

   }
   public async galleries() {
      try {

         const info = await this.galleriesDatabase.getGalleries();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar galerias");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar galerias")
         }
      }
   }

   public async editGallerie(
      id: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {

         if (!id ) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         if (!nome || !descricao || !imagem ) {
            throw new Error("Business - Necessário informar todos atributos para edição");
         }
         
        
            const Gallerie = await this.galleriesDatabase.editGallerie(
               id,
               nome,
               descricao,
               imagem
            );
         

         return ("Business - Galeria editada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar galeria")
         }
      }
   }

   public async addGallerie(
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {

         if ( !nome || !descricao || !imagem ) {
            throw new Error("Business - Necessário informar todos requisitos");
         }

         const id = this.idGenerator.generate();
         
          await this.galleriesDatabase.addGallerie(
            id,
            nome,
            descricao,
            imagem
         );

         return ("Business - Galeria adicionada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar galeria")
         }
      }
   }

   public async deleteGallerie(
      id: String
   ) {
      try {

         if ( !id ) {
            throw new Error("Business - Necessário informar idpara deletar galeria");
         }

          await this.galleriesDatabase.deleteGallerie(
            id
         );

         return ("Business - Galeria excluida com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao excluir galeria")
         }
      }
   }


   
}
export default new GalleriesBusiness(
   new IdGenerator(),
   new GalleriesDatabase()
   
)