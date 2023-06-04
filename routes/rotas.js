const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../src/database/dbConfig');

const app = express();

// Rotas das Pizzas
app.get('/pizzas', getAllPizzas);
app.get('/pizzas/:id', getPizzaById);
app.post('/pizzas', createPizza);
app.put('/pizzas/:id', updatePizza);
app.delete('/pizzas/:id', deletePizza);

// Rotas dos Pedidos
app.post('/pedidos', createPedido);
app.get('/pedidos', getAllPedidos);
app.get('/pedidos/:id', getPedidoById);
app.put('/pedidos/:id', updatePedido);
app.delete('/pedidos/:id', deletePedido);

// Rotas dos usuários
app.post('/usuarios', createUsuario);
app.get('/usuarios', getAllUsuarios);
app.get('/usuarios/:id', getUsuarioById);
app.put('/usuarios/:id', updateUsuario);
app.delete('/usuarios/:id', deleteUsuario);