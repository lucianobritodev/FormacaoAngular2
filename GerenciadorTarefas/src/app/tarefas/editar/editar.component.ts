import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa!: NgForm;
  tarefa!: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.buscarTarefa();
  }

  buscarTarefa(): void {
    const id = +this.route.snapshot.params['id'];
    // tslint:disable-next-line: no-non-null-assertion
    this.tarefa = this.tarefaService.buscarPorId(id)!;
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
