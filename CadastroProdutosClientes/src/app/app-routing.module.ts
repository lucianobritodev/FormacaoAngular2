import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cadastro-clientes', component: CadastroClientesComponent},
  {path: 'cadastro-clientes/:id', component: CadastroClientesComponent},
  {path: 'lista-clientes', component: ListaClientesComponent},
  {path: 'cadastro-produtos', component: CadastroProdutosComponent},
  {path: 'cadastro-produtos/:id', component: CadastroProdutosComponent},
  {path: 'lista-produtos', component: ListaProdutosComponent},
  {path: 'sweet-alert', component: SweetAlertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
