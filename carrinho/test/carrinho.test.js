import Carrinho from '../carrinho';
import Item from '../item';

describe('Testes do Carrinho', () => {
  it('Deve iniciar com carrinho vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens no carrinho', () => {
    const item = new Item('Maçã', 1.0, 2);
    const item2 = new Item('Banana', 0.5, 3);

    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve ter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();
    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra sem itens', () => {
    const carrinho = new Carrinho();
    function englobaErroCarrinho() {
      carrinho.finalizaCompra();
    }
    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);

    expect(carrinho.frete).toBe(10);
  });

  it('Deve finalizar as compras corretamente', () => {
    const item = new Item('Maçã', 1.0, 2);
    const item2 = new Item('Banana', 0.5, 3);

    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 3.5,
      total: 13.5,
      frete: 10,
    });
  });
});
