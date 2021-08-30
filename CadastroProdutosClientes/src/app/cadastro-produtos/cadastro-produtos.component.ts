import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from './../objetos/Produtos';
import { ProdutoService } from './../service/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  id: any;
  textButton = 'Cadastrar';
  titleAlert = 'Adicionado!';
  message = 'Produto adicionado com sucesso!';
  public produto: Produtos = new Produtos(0, '', '', '', '', 0);

  constructor(
    private activatedRoute: ActivatedRoute, // recebimento de parametros
    private router: Router,                 // navegação
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      if (parametros['id']) {
        this.textButton = 'Editar';
        this.id = parametros['id'];
        this.produtoService.buscarProdutoId(this.id).subscribe(produto => {
          this.produto = produto;
        });
        console.log(`Id enviado ${this.id}`);
      }
    });
  }

  adicionarProduto = () => {
    if (this.textButton === 'Cadastrar') {
      this.produtoService.adicionarProduto(this.produto).subscribe(
        success => {
          this.alertMessage();
          this.navegar('lista-produtos');
        },
        error => {
          this.message = 'Não foi possível cadastrar o produto!\nExistem falhas na comunicação com o servidor!';
          this.alertMessage();
          this.navegar('lista-produtos');
        },
        () => console.log('Requisição completa!'));
    } else {
      this.editarProduto();
    }

  }

  editarProduto = () => {
    this.produtoService.editarProduto(this.produto).subscribe(
      success => {
        this.titleAlert = 'Editado!';
        this.message = 'Produto editado com sucesso!';
        this.alertMessage();
        this.navegar('lista-produtos');
      },
      error => {
        this.message = 'Não foi possível editar o produto!\nExistem falhas na comunicação com o servidor!';
        this.alertMessage();
        this.navegar('lista-produtos');
      },
      () => console.log('Requisição completa!'));
  }

  navegar = (route: any) => {
    this.router.navigate([route]);
  }

  alertMessage = () => {
    if (this.textButton === 'Editar' || this.textButton === 'Cadastrar') {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: this.titleAlert,
        text: this.message,
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire(
        'Erro!',
        this.message,
        'error');
    }
  }
}
