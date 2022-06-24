const { databaseId } = require("../config/Client");
const ProdutoRepository = require("../repository/ProdutoRepository");
const produtoRepository = new ProdutoRepository();

class ProdutoController {
  static async adicionaProduto(req, res, next) {
    const nomeDoProduto = req.body.text;
    try {
      const produtoAdicionado = await produtoRepository.adicionaProduto(
        databaseId,
        nomeDoProduto
      );
      res.status(201).json(produtoAdicionado);
    } catch (error) {
      return next(error);
    }
  }

  static async atualizaStatusDoProduto(req, res, next) {
    const pageId = req.body.id;
    const status = req.body.status;
    try {
      await produtoRepository.atualizaStatusDoProduto(
        pageId,
        status
      );
      res.status(204).json();
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = ProdutoController;
