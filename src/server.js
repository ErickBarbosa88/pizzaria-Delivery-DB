/*const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../src/database/dbConfig')
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(pedidoRoutes);


// Obter todos os Pedidos
const getAllPedidos = (req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao obter Pedidos' });
    }

    client.query('SELECT * FROM users;', (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao obter Pedidos' });
      }

      res.status(200).json(result.rows);
    });
  });
};

/* Obter um Pedido específico
const getPedidoById = (req, res) => {
  const id = req.params.id;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao obter Pedido' });
    }

    client.query('SELECT * FROM Pedidos WHERE id = $1', [id], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao obter Pedido' });
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      res.status(200).json(result.rows[0]);
    });
  });
};
*
// Criar um novo Pedido
const createPedido = (req, res) => {
  const { user_id, user_name, user_contato, user_endereco } = req.body;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao criar Pedido' });
    }

    client.query('INSERT INTO users (user_id, user_name, user_contato, user_endereco) VALUES ($1, $2, $3, $4) RETURNING *', [user_id, user_name, user_contato, user_endereco], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao criar Pedido' });
      }

      res.status(201).json(result.rows[0]);
    });
  });
};
/*
// Atualizar um Pedido existente
const updatePedido = (req, res) => {
  const id = req.params.id;
  const { nome, quantidade } = req.body;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao atualizar Pedido' });
    }

    client.query('UPDATE Pedidos SET nome = $1, quantidade = $2 WHERE id = $3 RETURNING *', [nome, quantidade, id], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao atualizar Pedido' });
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      res.status(200).json(result.rows[0]);
    });
  });
};

// Excluir um Pedido
const deletePedido = (req, res) => {
  const id = req.params.id;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao excluir Pedido' });
    }

    client.query('DELETE FROM Pedidos WHERE id = $1 RETURNING *', [id], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao excluir Pedido' });
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      res.status(204).end();
    });
  });
};
*


app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

module.exports = {
  getAllPedidos,
  createPedido
  //getPedidoById,
  //updatePedido,
  //deletePedido
};

const router = express.Router();


router.get('/pedido', getAllPedidos);
router.post('/pedido', createPedido);

module.exports = router;
*/

const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../src/database/dbConfig');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Obter todos os Pedidos
const getAllPedidos = (req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao obter Pedidos' });
    }

    client.query('SELECT * FROM users;', (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao obter Pedidos' });
      }

      res.status(200).json(result.rows);
    });
  });
};

// Criar um novo Pedido
const createPedido = (req, res) => {
  const { user_id, user_name, user_contato, user_endereco } = req.body;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao criar Pedido' });
    }

    client.query('INSERT INTO users (user_id, user_name, user_contato, user_endereco) VALUES ($1, $2, $3, $4) RETURNING *', [user_id, user_name, user_contato, user_endereco], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao criar Pedido' });
      }

      res.status(201).json(result.rows[0]);
    });
  });
};

app.get('/pedido', getAllPedidos);
app.post('/pedido', createPedido);

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});