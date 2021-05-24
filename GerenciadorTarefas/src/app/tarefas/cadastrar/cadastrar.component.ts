import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa!: NgForm;
  tarefa!: Tarefa;

  constructor(
      private tarefaService: TarefaService,
      private router: Router
    ) {  }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
