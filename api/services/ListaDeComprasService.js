class ListaDeComprasService {
  static filtraResultadoDaListaPeloNomeEStatusDoProduto(database) {
    const resultado = [];
    database.results.forEach((r) => {
      resultado.push({
        Id: r.id,
        Produto: r.properties.Produto.title[0].text.content,
        Status: r.properties.Comprado.checkbox,
      });
    });
    return resultado;
  }
}

module.exports = ListaDeComprasService;
