export class Produtos {

  public id: number;
  public nome: string;
  public marca: string;
  public descricao: string;
  public cor: string;
  public preco: number;

  constructor(id: number, nome: string, marca: string, descricao: string, cor: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.marca = marca;
    this.descricao = descricao;
    this.cor = cor;
    this.preco = preco;
  }
}
