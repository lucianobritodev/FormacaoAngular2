import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarComponent } from './cadastrar';
import { EditarComponent } from './editar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarComponent
  }
];
