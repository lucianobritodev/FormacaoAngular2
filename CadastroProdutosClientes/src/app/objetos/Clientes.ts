export class Clientes {
  public id: number;
  public nome: string;
  public idade: number;
  public telefone: string;

  constructor(id: number, nome: string, idade: number, telefone: string) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
  }
}
