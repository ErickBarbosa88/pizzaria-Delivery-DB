const express = require('express');
const pedidoController = require('../controllers/pedidoController');

const router = express.Router();

router.get('/pedido', pedidoController.getAllPedidos);
//router.get('/pedido/:id', pedidoController.getPedidoById);
router.post('/pedido', pedidoController.createPedido);
//router.put('/pedido/:id', pedidoController.updatepedido);
//router.delete('/pedido/:id', pedidoController.deletepedido);

module.exports = router;
