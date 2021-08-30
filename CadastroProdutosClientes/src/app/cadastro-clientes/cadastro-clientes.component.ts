import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  id: any;
  texto: string = 'Teste';
  valor: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(parametros => {
      if (parametros['id']){
        this.id = parametros['id'];
        /* alert(this.id); */
      }
    });
  }

}
