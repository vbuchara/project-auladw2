'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class album_digital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  album_digital.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    telwhats: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    nome_responsavel: DataTypes.STRING,
    cpf_responsavel: DataTypes.INTEGER,
    titulo_foto: DataTypes.STRING,
    nome_fotografo: DataTypes.STRING,
    nome_foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'album_digital',
  });
  return album_digital;
};