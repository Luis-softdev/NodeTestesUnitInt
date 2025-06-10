import { somaHorasExtras, calculaDescontos } from '../index.js';

describe('Testes dos calculos de folha de pagamento', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 1200;
    const retornado = somaHorasExtras(1000, 200);

    expect(retornado).toBe(esperado);
  });

  it('Deve desconstar o valor do desconto do salário', () => {
    const esperado = 800;
    const retornado = calculaDescontos(1000, 200);

    expect(retornado).toBe(esperado);
  });
});
