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

// Obter todas as Pizzas
const getAllPizzas = (req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao obter Pizzas' });
    }

    client.query('SELECT * FROM pizzas;', (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao obter Pizzas' });
      }

      res.status(200).json(result.rows);
    });
  });
};

// Obter uma Pizza por ID
const getPizzaById = (req, res) => {
  const pizzaId = req.params.id;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao obter a Pizza' });
    }

    client.query('SELECT * FROM pizzas WHERE pizza_id = $1;', [pizzaId], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao obter a Pizza' });
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pizza não encontrada' });
      }

      res.status(200).json(result.rows[0]);
    });
  });
};

// Criar uma nova Pizza
const createPizza = (req, res) => {
  const { pizza_id, pizza_nome, pizza_valor, pizza_imagem, pizza_descricao } = req.body;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao criar Pizza' });
    }

    client.query('INSERT INTO pizzas (pizza_id, pizza_nome, pizza_valor, pizza_imagem, pizza_descricao) VALUES ($1, $2, $3, $4, $5) RETURNING *', [pizza_id, pizza_nome, pizza_valor, pizza_imagem, pizza_descricao], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao criar Pizza' });
      }

      res.status(201).json(result.rows[0]);
    });
  });
};

// Atualizar uma Pizza existente
const updatePizza = (req, res) => {
  const pizzaId = req.params.id;
  const { pizza_nome, pizza_valor, pizza_imagem, pizza_descricao } = req.body;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao atualizar a Pizza' });
    }

    client.query('UPDATE pizzas SET pizza_nome = $1, pizza_valor = $2, pizza_imagem = $3, pizza_descricao = $4 WHERE pizza_id = $5 RETURNING *', [pizza_nome, pizza_valor, pizza_imagem, pizza_descricao, pizzaId], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao atualizar a Pizza' });
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pizza não encontrada' });
      }

      res.status(200).json(result.rows[0]);
    });
  });
};

// Excluir uma Pizza
const deletePizza = (req, res) => {
  const pizzaId = req.params.id;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao excluir a Pizza' });
    }

    client.query('DELETE FROM pizzas WHERE pizza_id = $1 RETURNING *', [pizzaId], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao excluir a Pizza' });
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pizza não encontrada' });
      }

      res.status(200).json({ message: 'Pizza excluída com sucesso' });
    });
  });
};



// Rotas das Pizzas
app.get('/pizzas', getAllPizzas);
app.get('/pizzas/:id', getPizzaById);
app.post('/pizzas', createPizza);
app.put('/pizzas/:id', updatePizza);
app.delete('/pizzas/:id', deletePizza);

// Rotas dos Pedidos
app.get('/pedido', getAllPedidos);
app.post('/pedido', createPedido);

// Rotas dos Pedidos


app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
