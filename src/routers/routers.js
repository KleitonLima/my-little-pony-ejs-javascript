import express from "express";
import { getDetalhes, getIndex, getDeletar, getCadastrar, postCadastrar, getEditar, postEditar } from "../controller/Controlador.js";

export const routers = express.Router();

routers.get("/", getIndex);
routers.get("/detalhes/:id", getDetalhes);
routers.get("/deletar/:id", getDeletar);
routers.get("/cadastrar", getCadastrar);
routers.post("/cadastrar", postCadastrar);
routers.get("/editar/:id", getEditar);
routers.post("/editar/:id", postEditar);
