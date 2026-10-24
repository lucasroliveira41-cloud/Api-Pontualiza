import { Router } from "express";
import PontoController from "./ponto.controller.js";

const pontoRouter = Router();

pontoRouter.post("/ponto");

export default pontoRouter;