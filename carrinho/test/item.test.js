import Item from '../item';

describe('Testes dos Itens', () => {
  it('Deve ter 3 campos: nome, valor e quantidade', () => {
    const item = new Item('Abacaxi', 2.5, 3);

    expect(item.nome).toBe('Abacaxi');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(3);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item = new Item('Batata', 0.1, 3);

    expect(item.pegaValorTotalItem()).toBeCloseTo(0.3); // Usando toBeCloseTo para evitar problemas de precisão com números de ponto flutuante
  });
});
