const express = require('express');
const bodyParser = require('body-parser');
const pedidosRoutes = require('./routes/pedidoRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(pedidosRoutes);

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
