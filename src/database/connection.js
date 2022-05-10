import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const connection = new Sequelize(
  "postgres://personagens_my_little_pony_user:95dPlCdFokTznjLSi382iXWFUK0czG22@dpg-c9sq8tnh8vl0smtrbcqg-a.oregon-postgres.render.com/personagens_my_little_pony",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
