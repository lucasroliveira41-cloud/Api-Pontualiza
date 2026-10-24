import { Router } from "express";
import PontoController from "./ponto.controller.js";

const PontoRouter = Router();

PontoRouter.post("/",PontoController.createPonto);
PontoRouter.put("/:id",PontoController.updatePonto);
PontoRouter.get("/",PontoController.consulta);

export default PontoRouter;