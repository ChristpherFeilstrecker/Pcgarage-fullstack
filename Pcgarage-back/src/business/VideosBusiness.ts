import { VideosDatabase } from "../data/VideosDatabase";
import { IdGenerator } from "../services/idGenerator";

export class VideosBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private videosDatabase: VideosDatabase,
   ) {

   }
   public async videos() {
      try {

         const info = await this.videosDatabase.getVideos();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar videos");
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

   public async addVideo(
      nome: String,
      descricao: String,
      url: String
   ) {
      try {

         if ( !nome || !descricao || !url ) {
            throw new Error("Business - Necessário informar todos requisitos");
         }

         const id = this.idGenerator.generate();
         
          await this.videosDatabase.addVideo(
            id,
            nome,
            descricao,
            url
         );

         return ("Business - |Video adicionado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar galeria")
         }
      }
   }

   public async deleteVideo(
      id: String
   ) {
      try {

         if (!id) {
            throw new Error("Business - Necessário informar id para deletar produto");
         }

         await this.videosDatabase.deleteVideo(
            id
         );

         return ("Business - Produto deletado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao deletar produto")
         }
      }
   }

   public async editVideo(
      id: String,
      nome: String,
      descricao: String,
      url: String
   ) {
      try {

         if (!id ) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         if (!nome && !descricao && !url ) {
            throw new Error("Business - Necessário informar no mínimo um atributo para editar");
         }
         
         
            const Gallerie = await this.videosDatabase.editVideo(
               id,
               nome,
               descricao,
               url
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

/*
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

         if (!nome && !descricao && !imagem ) {
            throw new Error("Business - Necessário informar no mínimo um atributo para editar");
         }
         
         if(nome){
            const Gallerie = await this.galleriesDatabase.editGallerieNome(
               id,
               nome
            );
         }

         if(descricao){
            const Gallerie = await this.galleriesDatabase.editGallerieDescricao(
               id,
               descricao
            );
         }

         if(imagem){
            const Gallerie = await this.galleriesDatabase.editGallerieImagem(
               id,
               imagem
            );
         }

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
*/

   
}
export default new VideosBusiness(
   new IdGenerator(),
   new VideosDatabase()
   
)