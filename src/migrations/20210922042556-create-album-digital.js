'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('album_digital', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cpf: {
        type: Sequelize.DECIMAL(11,0),
        allowNull: true,
      },
      telwhats: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      nome_responsavel: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cpf_responsavel: {
        type: Sequelize.DECIMAL(11,0),
        allowNull: true
      },
      titulo_foto: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      nome_fotografo: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      nome_foto: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('album_digital');
  }
};