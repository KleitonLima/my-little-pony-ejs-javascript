import { connection } from "../database/connection.js";
import { personagens } from "../model/personagens.js";

export const getIndex = async (req, res) => {
  try {
    // const listPersonagens = await connection.query("SELECT * FROM personagens", {
    //   model: personagens,
    // });
    const listPersonagens = await personagens.findAll();
    res.render("index.ejs", {
      listPersonagens,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const detalhesPerson = await personagens.findByPk(req.params.id);
    res.render("detalhes.ejs", {
      detalhesPerson,
    });
  } catch (error) {
    res.send(error.message);
  }
};
