import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];

   constructor(private TarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    this.tarefas = [
      new Tarefa(1, 'Curso de HTML5', true),
      new Tarefa(2, 'Curso de Angular2', true),
      new Tarefa(3, 'Curso de Java', true),
      new Tarefa(4, 'Curso de Node.js', false)
    ];
  }

  listarTodos(): Tarefa[] {
    return this.TarefaService.listarTodos();
  }

}
