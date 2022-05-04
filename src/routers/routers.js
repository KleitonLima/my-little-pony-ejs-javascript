import express from "express";
import { getIndex } from "../controller/Controlador.js";

export const routers = express.Router();

routers.get("/", getIndex);
