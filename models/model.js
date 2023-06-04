const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('rxwtloac', 'rxwtloac', '2EJ22ehciEulkTEtDHUwp-VeV3wFYipG', {
  host: 'silly.db.elephantsql.com',
  dialect: 'postgres', 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  });


const Pedido = sequelize.define('Pedido', {
    pedido_endereco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pedido_desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'pedidos',
    timestamps: false 
  });
  
  // Modelo Pizza
  const Pizza = sequelize.define('Pizza', {
    pizza_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pizza_nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pizza_valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pizza_imagem: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pizza_descricao: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'pizzas',
    timestamps: false
  });
  
  // Modelo Usuario
  const Usuario = sequelize.define('Usuario', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'usuarios',
    timestamps: false
  });
  

  Pedido.belongsTo(Usuario, { foreignKey: 'user_id' });
  Usuario.hasMany(Pedido, { foreignKey: 'user_id' });
  
  
  module.exports = {
    sequelize,
    Pedido,
    Pizza,
    Usuario
  };