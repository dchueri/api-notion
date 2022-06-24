const { Router } = require("express");
const ListaDeComprasController = require("../controllers/ListaDeComprasController");

const router = Router();

router.get("/lista-de-compras", ListaDeComprasController.get);

module.exports = router;