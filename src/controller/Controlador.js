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

export const getDeletar = async (req, res) => {
  try {
    await personagens.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

export const getCadastrar = (req, res) => {
  res.render("cadastrar.ejs");
};

export const postCadastrar = async (req, res) => {
  const { imagem, nome, especie, habilidades, personalidade } = req.body;
  try {
    await personagens.create({ imagem, nome, especie, habilidades, personalidade });
    res.redirect("/");
    if (!imagem || !nome || !especie || !habilidades || !personalidade) {
      res.send("Não tente me burlar! Volte e digite todos os campos!");
    }
  } catch (error) {
    res.send(error.message);
  }
};
export const getEditar = async (req, res) => {
  try {
    const personagemAtual = await personagens.findByPk(req.params.id);
    res.render("editar.ejs", {
      personagemAtual,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const postEditar = async (req, res) => {
  const { imagem, nome, especie, habilidades, personalidade } = req.body;
  try {
    await personagens.update(
      {
        imagem: imagem,
        nome: nome,
        especie: especie,
        habilidades: habilidades,
        personalidade: personalidade,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};
