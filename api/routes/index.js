const bodyParser = require('body-parser')
const listaDeCompras = require("./ListaDeComprasRoute");
const produto = require("./ProdutoRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), listaDeCompras, produto);
};