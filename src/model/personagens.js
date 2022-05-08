import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const personagens = connection.define(
  "personagens",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    especie: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    habilidades: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    personalidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

// function initTable(){
//   personagens.async()
// }

// initTable()