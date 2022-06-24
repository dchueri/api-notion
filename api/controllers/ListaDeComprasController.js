const { notion, databaseId } = require("../config/Client");
const ListaDeComprasRepository = require("../repository/ListaDeComprasRepository");
const listaDeComprasRepository = new ListaDeComprasRepository();

class ListaDeComprasController {
  static async get(req, res, next) {
    const { comprados } = req.query;
    try {
      const database = await listaDeComprasRepository.pegaListaDeCompras(
        databaseId,
        comprados
      );
      res.status(200).json(database);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = ListaDeComprasController;
