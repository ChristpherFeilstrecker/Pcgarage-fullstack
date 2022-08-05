
export class Cards {
    constructor(
       private id: string,
       private nome: string,
       private tipo: string | null,
       private imagem: string,
       private forca: number,
       private velocidade: number,
       private habilidade: number,
       private equipamento: number,
       private inteligencia: number

    ) { }
 
    public getId(): string {
       return this.id;
    }

    public getNome(): string {
       return this.nome;
    }
 
    public getTipo(): string | null {
       return this.tipo;
    }

    public getImagem(): string {
      return this.imagem;
   }

   public getForca(): number {
      return this.forca;
   }

   public getVelocidade(): number {
      return this.velocidade;
   }

   public getHabilidade(): number {
      return this.habilidade;
   }

   public getEquipamento(): number {
      return this.equipamento;
   }

   public getInteligencia(): number {
      return this.inteligencia;
   }
 }

