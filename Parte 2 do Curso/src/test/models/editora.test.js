import {
  describe, expect, it, jest,
} from '@jest/globals';
import Editora from '../../models/editora.js';

describe('Testando o modelo Editora', () => {
  const objectoEditora = {
    nome: 'CDC',
    cidade: 'São Paulo',
    email: 'lGt4O@example.com',
  };

  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objectoEditora);

    expect(editora).toEqual(
      expect.objectContaining(objectoEditora),
    );
  });

  it.skip('Deve salvar editora no banco de dados', () => {
    const editora = new Editora(objectoEditora);

    editora.salvar().then((dados) => {
      expect(dados.nome).toBe('CDC');
    });
  });

  it.skip('Deve salvar no banco de dados usando async/await', async () => {
    const editora = new Editora(objectoEditora);

    const dados = await editora.salvar();

    const retornado = await Editora.pegarPeloId(dados.id);

    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objectoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  it('Deve fazer uma chamada simulada ao BD', () => {
    const editora = new Editora(objectoEditora);

    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'CDC',
      cidade: 'São Paulo',
      email: 'lGt4O@example.com',
      created_at: '2025-10-01',
      updated_at: '2025-10-01',
    });

    const retorno = editora.salvar();

    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objectoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
