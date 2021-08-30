import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoService } from './service/produto.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroClientesComponent,
    ListaClientesComponent,
    ListaProdutosComponent,
    CadastroProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
