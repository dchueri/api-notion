const { notion } = require("../config/Client");

class ProdutoRepository {
  async adicionaProduto(databaseId, nomeDoProduto) {
    const adicionaProduto = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Produto: { title: [{ text: { content: nomeDoProduto } }] },
        Comprado: { checkbox: false },
      },
    });
    return adicionaProduto;
  }

  async atualizaStatusDoProduto(pageId, status) {
    const marcarComoComprado = await notion.pages.update({
        page_id: pageId,
        properties: {
          Comprado: {
            checkbox: status,
          },
        },
      });
    return marcarComoComprado;  
  }
}

module.exports = ProdutoRepository;
