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
      type: Sequelize.STRING(500),
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
      type: Sequelize.STRING(500),
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

const initTable = async () => {
  try {
    await personagens.sync();
  } catch (error) {
    res.send(error.message);
  }
};

initTable();
