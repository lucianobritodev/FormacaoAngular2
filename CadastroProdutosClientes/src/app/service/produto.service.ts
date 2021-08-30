import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Produtos } from '../objetos/Produtos';
import { Clientes } from '../objetos/Clientes';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  private readonly Produtos = `${environment.DB}/produtos`;
  private readonly Clientes = `${environment.DB}/clientes`;

  constructor(private $http: HttpClient) { }

  listarProdutos() {
    return this.$http.get<Produtos[]>(this.Produtos);
  }

  buscarProdutoId(id: any) {
    return this.$http.get<Produtos>(`${this.Produtos}/${id}`);
  }

  listarClientes() {
    return this.$http.get<Clientes[]>(this.Clientes);
  }

  excluirProduto(id: any) {
    return this.$http.delete(`${this.Produtos}/${id}`);
  }

  excluirClientes(id: any) {
    return this.$http.delete(`${this.Clientes}/${id}`);
  }

  adicionarProduto(prod: Produtos) {
    return this.$http.post(this.Produtos, prod);
  }

  adicionarCliente(cliente: Clientes) {
    return this.$http.post(this.Clientes, cliente);
  }

  editarProduto(prod: Produtos) {
    return this.$http.put(`${this.Produtos}/${prod.id}`, prod);
  }

  editarCliente(cliente: Clientes) {
    return this.$http.put(`${this.Clientes}/${cliente.id}`, cliente);
  }

}
