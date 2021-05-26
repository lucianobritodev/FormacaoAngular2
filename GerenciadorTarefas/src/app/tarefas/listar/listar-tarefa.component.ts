import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa, Mensagens } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];
  concluida = false;
  public mensagens: Mensagens = new Mensagens();

   constructor(
     private tarefaService: TarefaService,
    ) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  async remover($event: any, tarefa: Tarefa): Promise<void> {
    $event.preventDefault();
    // confirm(`Deseja remover a tarefa ${tarefa.nome} ?`)
    const result = await this.mensagens.alertYesNo(`Deseja remover a tarefa ${tarefa.nome}?`, tarefa.nome!);
    if (result) {
      // tslint:disable-next-line: no-non-null-assertion
      this.tarefaService.remover(tarefa.id!);
      this.tarefas = this.listarTodos();
    }
  }

  // tslint:disable-next-line: typedef
  async alterarStatus(tarefa: Tarefa) {

    if (tarefa.concluida === true ) {
      // tslint:disable-next-line: max-line-length
      this.concluida = await this.mensagens.alertConfirm(`Deseja alterar o status da tarefa ${tarefa.nome} para não concluída?`, tarefa.nome!);
    } else {
      this.concluida = await this.mensagens.alertConfirm(`Deseja alterar o status da tarefa ${tarefa.nome} para concluída?`, tarefa.nome!);
    }

    if (this.concluida) {
      // tslint:disable-next-line: no-non-null-assertion
      this.tarefaService.alterarStatus(tarefa.id!);
      this.tarefas = this.listarTodos();
    } else {
      // tslint:disable-next-line: no-non-null-assertion
      this.tarefaService.alterarStatus(tarefa.id!);
      // tslint:disable-next-line: no-non-null-assertion
      this.tarefaService.alterarStatus(tarefa.id!);
      this.tarefas = this.listarTodos();
    }
  }
}
