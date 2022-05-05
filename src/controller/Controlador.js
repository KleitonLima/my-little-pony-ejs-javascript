import { connection } from "../database/connection.js";
import { personagens } from "../model/personagens.js";

export const getIndex = async (req, res) => {
  // const listPersonagens = await connection.query("SELECT * FROM personagens", {
  //   model: personagens,
  // });
  const listPersonagens = await personagens.findAll();
  console.log(listPersonagens);
  res.render("index.ejs");
};
