const { notion } = require("../config/Client");
const ListaDeComprasService = require("../services/ListaDeComprasService")

class ListaDeComprasRepository {
  async pegaListaDeCompras(databaseId, query) {
    const database = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Comprado",
        checkbox: {
          equals: Boolean(query),
        },
      },
    });
    const filtro = ListaDeComprasService.filtraResultadoDaListaPeloNomeEStatusDoProduto(database);
    return filtro;
  }
}

module.exports = ListaDeComprasRepository;
