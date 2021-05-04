import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {

  private num1: string;
  private num2: string;
  private oper: string;
  private result: number;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Retorna todos os valores para o padrão.
   *
   * @return void
   */
  limpar(): void {
    this.num1 = '0';
    this.num2 = null;
    this.oper = null;
    this.result = null;
  }

  /**
   * Adiciona o número selecionado para o cálculo posteriormente.
   *
   * @param string numero
   * @return void
   */
  adicionarNumero(numero: string): void {
    if (this.oper === null) {
      this.num1 = this.concatenarNumero(this.num1, numero);
    } else {
      this.num2 = this.concatenarNumero(this.num2, numero);
    }
  }

  /**
   * Retorna o valor concatenado. Trata o separador decimal.
   *
   * @param string numAtual
   * @param string numConcat
   * @return string
   */
   concatenarNumero(numAtual: string, numConcat: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    // caso o primeiro digito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    // caso '.' digitado é já exista, retorna ignorando o segundo ponto
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
   }

    /**
     * Caso já possua uma operação selecionada, executa a
     * operacao anterior e define a nova operação.
     *
     * @param string operacao
     * @return void
     */
    definirOperacao(operacao: string): void {
      // apenas define a operação caso não exista uma
      if (this.oper === null) {
        this.oper = operacao;
        return;
      }

      if (this.num2 !== null) {
        this.result = this.calculadoraService.calculo(
          parseFloat(this.num1),
          parseFloat(this.num2),
          this.oper
        );
        this.oper = operacao;
        this.num1 = this.result.toString();
        this.num2 = null;
        this.result = null;
      }
    }

    /**
     * Efetua o cálculo de uma operação.
     *
     * @return void
     */
    calcular(): void {
      if (this.num2 === null) {
        return;
      }

      this.result = this.calculadoraService.calculo(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.oper
      );
    }

    /**
     * Retorna o valor a ser exibido na tela da calculadora.
     *
     * @return string
     */
    get display(): string {
      if (this.result !== null) {
        return this.result.toString();
      }
      if (this.num2 !== null) {
        return this.num2;
      }

      return this.num1;
    }
}
