import express from "express";
import { getDetalhes, getIndex } from "../controller/Controlador.js";

export const routers = express.Router();

routers.get("/", getIndex);
routers.get('/detalhes/:id', getDetalhes)
