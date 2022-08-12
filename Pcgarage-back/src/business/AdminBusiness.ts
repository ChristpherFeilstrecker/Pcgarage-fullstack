import { AdminDatabase } from "../data/AdminDatabase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { HashGenerator } from "../services/hashGenerator";

export class AdminBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private tokenGenerator: TokenGenerator,
      private hashGenerator: HashGenerator,
      private adminDatabase: AdminDatabase
   ) {

   }
   public async admin() {
      try {

         const admin = await this.adminDatabase.getAdmin();

         if (!admin || admin.length === 0) {

            throw new Error("BD - Erro ao retornar administrador");
         }

         return (admin);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar administrador")
         }
      }
   }

   public async login(nome: string, password: string) {

      try {
         if (!nome || !password) {
            throw new Error("Preencha todos os dados corretamente");
         }
         const user = await this.adminDatabase.getUserByName(nome);

         if (!user) {
            throw new Error("usuário ou senha incorretos");
         }
         let senha = user && user[0].senha

         const isPasswordCorrect = await this.hashGenerator.compareHash(
            password,
            senha
         );

         if (!isPasswordCorrect) {
            throw new Error("usuário ou senha incorretos");
         }

         const accessToken = this.tokenGenerator.generate({
            id: user.id,
         });

         return { accessToken };
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message);
         } else {
            throw new Error("Erro ao logar")
         }
      }
   }

   public async addadmin(
      nome: string,
      password: string

   ) {
      try {
         if (!nome || !password) {
            throw new Error("Preencha todos os dados corretamente");
         }

         const id = this.idGenerator.generate();

         const cypherPassword = await this.hashGenerator.hash(password);

         await this.adminDatabase.addAdmin(
            id, 
            nome, 
            cypherPassword
         );


         return "Administrador criado com sucesso";
      } catch (error) {

         if (error instanceof Error) {
            throw new Error( error.message)
         } else {
            throw new Error( "Erro ao cadastrar administrador")
         }

      }

   }

   public async deleteAdmin(
      id: String
   ) {
      try {

         if (!id) {
            throw new Error("Business - Necessário informar id para deletar administrador");
         }

         await this.adminDatabase.deleteAdmin(
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
export default new AdminBusiness(
   new IdGenerator(),
   new TokenGenerator(),
   new HashGenerator(),
   new AdminDatabase()

)