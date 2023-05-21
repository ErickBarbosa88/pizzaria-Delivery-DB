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

// Obter todos os pedidos
// Obter todos os pedidos
const getAllPedidos = (req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao obter pedidos' });
    }

    client.query('SELECT * FROM pedidos;', (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao obter pedidos' });
      }

      res.status(200).json(result.rows);
    });
  });
};

// Obter um pedido por ID
const getPedidoById = (req, res) => {
  const pedidoId = req.params.id;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao obter o pedido' });
    }

    client.query('SELECT * FROM pedidos WHERE pedido_id = $1;', [pedidoId], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao obter o pedido' });
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      res.status(200).json(result.rows[0]);
    });
  });
};

// Criar um novo pedido
const createPedido = (req, res) => {
  const { pedido_endereco, pedido_desc, user_id } = req.body;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao criar pedido' });
    }

    client.query('INSERT INTO pedidos (pedido_endereco, pedido_desc, user_id) VALUES ($1, $2, $3) RETURNING *', [pedido_endereco, pedido_desc, user_id], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao criar pedido' });
      }

      res.status(201).json(result.rows[0]);
    });
  });
};

// Atualizar um pedido existente
const updatePedido = (req, res) => {
  const pedidoId = req.params.id;
  const { pedido_endereco, pedido_desc } = req.body;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao atualizar o pedido' });
    }

    client.query('UPDATE pedidos SET pedido_endereco = $1, pedido_desc = $2 WHERE pedido_id = $3 RETURNING *', [pedido_endereco, pedido_desc, pedidoId], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao atualizar o pedido' });
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      res.status(200).json(result.rows[0]);
    });
  });
};

// Excluir um pedido
const deletePedido = (req, res) => {
  const pedidoId = req.params.id;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao excluir o pedido' });
    }

    client.query('DELETE FROM pedidos WHERE pedido_id = $1 RETURNING *', [pedidoId], (err, result) => {
      done(); // Libera a conexão

      if (err) {
        console.error('Erro ao executar a consulta', err);
        return res.status(500).json({ error: 'Erro ao excluir o pedido' });
      }

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      res.status(200).json({ message: 'Pedido excluído com sucesso' });
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

// Criar um novo usuário
const createUsuario = (req, res) => {
  const { nome, sobrenome, email, senha, telefone } = req.body;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }

    client.query(
      'INSERT INTO usuarios (nome, sobrenome, email, senha, telefone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nome, sobrenome, email, senha, telefone],
      (err, result) => {
        done(); // Libera a conexão

        if (err) {
          console.error('Erro ao executar a consulta', err);
          return res.status(500).json({ error: 'Erro ao criar usuário' });
        }

        res.status(201).json(result.rows[0]);
      }
    );
  });
};

// Obter todos os usuários
const getAllUsuarios = (req, res) => {
  pool.query('SELECT * FROM usuarios ORDER BY usuario_id ASC', (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta', err);
      return res.status(500).json({ error: 'Erro ao obter usuários' });
    }

    res.status(200).json(result.rows);
  });
};

// Obter um usuário por ID
const getUsuarioById = (req, res) => {
  const usuarioId = req.params.id;

  pool.query('SELECT * FROM usuarios WHERE usuario_id = $1', [usuarioId], (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta', err);
      return res.status(500).json({ error: 'Erro ao obter usuário' });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json(result.rows[0]);
  });
};

// Atualizar um usuário existente
const updateUsuario = (req, res) => {
  const usuarioId = req.params.id;
  const { nome, sobrenome, email, senha, telefone } = req.body;

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao obter conexão do pool', err);
      return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }

    client.query(
      'UPDATE usuarios SET nome = $1, sobrenome = $2, email = $3, senha = $4, telefone = $5 WHERE usuario_id = $6 RETURNING *',
      [nome, sobrenome, email, senha, telefone, usuarioId],
      (err, result) => {
        done(); // Libera a conexão

        if (err) {
          console.error('Erro ao executar a consulta', err);
          return res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }

        if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json(result.rows[0]);
      }
    );
  });
};

// Excluir um usuário
const deleteUsuario = (req, res) => {
  const usuarioId = req.params.id;

  pool.query('DELETE FROM usuarios WHERE usuario_id = $1 RETURNING *', [usuarioId], (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta', err);
      return res.status(500).json({ error: 'Erro ao excluir usuário' });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  });
};

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

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
