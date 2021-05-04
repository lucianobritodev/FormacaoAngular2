import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let service: CalculadoraService = new CalculadoraService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers: [ CalculadoraService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
      let soma = service.calculo(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
  });

  it('deve garantir que 1 - 4 = -3', () => {
      let subtracao = service.calculo(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
  });

  it('deve garantir que 1 / 4 = 0.25', () => {
    let divisao = service.calculo(1, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.25);
  });

  it('deve garantir que 1 * 4 = 4', () => {
    let multiplicacao = service.calculo(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  });

  it('deve retornar 0 para operação inválida', () => {
    let operacaoInvalida = service.calculo(1, 4, '%');
    expect(operacaoInvalida).toEqual(0);
  });

});
