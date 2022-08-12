import BaseDataBase from "./BaseDatabase";

export class ProductsDatabase extends BaseDataBase {

   protected tableName: string = "pcgarage_produtos";

   
   public async getProducts(): Promise<void | any> {
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

   public async getProductsById(
      id: String
   ): Promise<void | any> {
      try {
 
         let query = `SELECT * from \`${this.tableName}\` WHERE \`id\`="${id}";`
  
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

   public async editProduct(
      id: String,
      id_galeria: String,
      nome: String,
      descricao: String,
      observacao: String,
      imagem1: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`id_galeria\`="${id_galeria}", \`nome\`="${nome}", \`descricao\`="${descricao}", \`observacao\`="${observacao}", \`imagem1\`="${imagem1}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

  
   public async editProductImagem(
      id: String,
      pos:String,
      imagem: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`${pos}\`="${imagem}" WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

   public async deleteProductImagem(
      id: String,
      imagem: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`${imagem}\`=NULL WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

   public async addProduct(
      id: String,
      id_galeria: String,
      nome: String,
      descricao: String,
      observacao:String,
      imagem1: String
   ): Promise<void> {
      try {
         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, id_galeria, nome, descricao, observacao, imagem1 , imagem2, imagem3, imagem4, imagem5)
            VALUES (
            '${id}', 
            '${id_galeria}',
            '${nome}', 
            '${descricao}',
            '${observacao}',
            '${imagem1}',
            null,
            null,
            null,
            null
            )`
         );
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
         }
      }
   }

   public async deleteProduct(
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