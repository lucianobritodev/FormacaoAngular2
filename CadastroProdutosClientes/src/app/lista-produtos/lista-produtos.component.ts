import { Produtos } from './../objetos/Produtos';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: any;
  listaProdutos: Array<Produtos> = [];
  carregando: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.alertCarregando();
    setTimeout(() => {
      this.produtoService.listarProdutos().subscribe(produtos => {
        this.carregando = true;
        this.listaProdutos = produtos;
      });
    }, 3000);
  }

  recarregarLista(): void {
    setTimeout(() => {
      this.ngOnInit();
    }, 3000);
  }

  excluirProduto = (id: any) => {
    this.produtoService.excluirProduto(id).subscribe(
      success => Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Excluido!',
        text: 'Produto exclido com sucesso!',
        showConfirmButton: false,
        timer: 1500
      }),
      error => Swal.fire('Erro!', 'Não foi possível excluir o item selecionado!', 'error'),
      () => console.log('Requisição completa!')
    );
    this.recarregarLista();
  }

  // this.alertExcluir(); Chamada do método de excluir
  public alertExcluir(id: any): void {
    Swal.fire({
      title: 'Você tem certeza?',
      text: `Você não poderá reverter isso!`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exluir!'

    }).then(result => {
      if (result.value) {
        this.excluirProduto(id);
      }
    });
  }

    // this.alertCarregando(); Chamada do método Carregando
    public alertCarregando(): any {
      let timerInterval: any;
      let b: any;
      let time: number;
      Swal.fire({
        title: 'Carregando...',
        html: `Por favor aguade <b></b> segundos. Estamos fazendo a busca dos dados!`,
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getContent();
            if (content) {
              b = content.querySelector('b');
              if (b) {
                time = Number(Swal.getTimerLeft());
                b.textContent = (time / 1000).toFixed(0);
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
      return;
    }

    editarProduto = (id: any) => {
      this.router.navigate(['cadastro-produtos', id]);
    }
}
