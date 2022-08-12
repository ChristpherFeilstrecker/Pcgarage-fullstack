import { ProductsDatabase } from "../data/ProductsDataBase";
import idGenerator, { IdGenerator } from "../services/idGenerator";

export class ProductsBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private productsDatabase: ProductsDatabase,
   ) {

   }
   public async products() {
      try {

         const info = await this.productsDatabase.getProducts();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar produtos");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar produtos")
         }
      }
   }

   public async editProduct(
      id: String,
      id_galeria: String,
      nome: String,
      descricao: String,
      observacao: String,
      imagem1: String,
      imagem2: String,
      imagem3: String,
      imagem4: String,
      imagem5: String
   ) {
      try {

         if (!id) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         if (!nome && !id_galeria && !descricao && !observacao && !imagem1 && !imagem2 && !imagem3 && !imagem4 && !imagem5) {
            throw new Error("Business - Necessário informar no mínimo um atributo para editar");
         }


         const highlights = await this.productsDatabase.editProduct(
            id,
            id_galeria,
            nome,
            descricao,
            observacao,
            imagem1

         );

         if (imagem2) {
            let pos = "imagem2"
            const highlights = await this.productsDatabase.editProductImagem(
               id,
               pos,
               imagem2
            );
         } 
         if (imagem3) {
            let pos = "imagem3"
            const highlights = await this.productsDatabase.editProductImagem(
               id,
               pos,
               imagem3
            );
         } 
         
         if (imagem4) {
            let pos = "imagem4"
            const highlights = await this.productsDatabase.editProductImagem(
               id,
               pos,
               imagem4
            );
         } 
          if (imagem5) {
            let pos = "imagem5"
            const highlights = await this.productsDatabase.editProductImagem(
               id,
               pos,
               imagem5
            );
         }




         return ("Business - Produto editado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar produto")
         }
      }
   }

   public async addProduct(
      id_galeria: String,
      nome: String,
      descricao: String,
      observacao: String,
      imagem1: String
   ) {
      try {

         if (!id_galeria || !nome || !descricao || !observacao || !imagem1) {
            throw new Error("Business - Necessário informar todos requisitos");
         }

         const id = this.idGenerator.generate();

         await this.productsDatabase.addProduct(
            id,
            id_galeria,
            nome,
            descricao,
            observacao,
            imagem1
         );

         return ("Business - Produto adicionada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar produto")
         }
      }
   }

   public async addImgProduct(
      id: String,
      imagem2: String,
      imagem3: String,
      imagem4: String,
      imagem5: String
   ) {
      try {

         if (!id) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         if (!imagem2 && !imagem3 && !imagem4 && !imagem5) {
            throw new Error("Business - Necessário enviar ao menos uma imagem para adicionar");
         }

         const info = await this.productsDatabase.getProductsById(id);

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar produto, id incorreto ou produto inexistente");
         }

         if (imagem2) {
            let pos = "imagem2"
            const highlights = await this.productsDatabase.editProductImagem(
               id,
               pos,
               imagem2
            );
         } else if (imagem3) {
            let pos = "imagem3"
            const highlights = await this.productsDatabase.editProductImagem(
               id,
               pos,
               imagem3
            );
         } else if (imagem4) {
            let pos = "imagem4"
            const highlights = await this.productsDatabase.editProductImagem(
               id,
               pos,
               imagem4
            );
         } else if (imagem5) {
            let pos = "imagem5"
            const highlights = await this.productsDatabase.editProductImagem(
               id,
               pos,
               imagem5
            );
         }
         return ("Business - Produto adicionada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar produto")
         }
      }
   }

   public async deleteImgProduct(
      id: String,
      imagem: String
      
   ) {
      try {

         if (!id) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         if (!imagem) {
            throw new Error("Business - Necessário enviar uma imagem para excluir");
         }

         const info = await this.productsDatabase.getProductsById(id);

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar produto, id incorreto ou produto inexistente");
         }

         if (imagem) {
            let pos = "imagem2"
            const highlights = await this.productsDatabase.deleteProductImagem(
               id,
               imagem
            );
         } 
         return ("Business - Imagem deletada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao deletar imagem de produto")
         }
      }
   }

   public async deleteProduct(
      id: String
   ) {
      try {

         if (!id) {
            throw new Error("Business - Necessário informar id para deletar produto");
         }

         await this.productsDatabase.deleteProduct(
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



}
export default new ProductsBusiness(
   new IdGenerator(),
   new ProductsDatabase()
)