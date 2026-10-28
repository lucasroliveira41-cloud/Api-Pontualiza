import { Router } from "express";
import PontoController from "./ponto.controller.js";

const PontoRouter = Router();

PontoRouter.post("/",PontoController.createPonto);
PontoRouter.put("/:id",PontoController.updatePonto);
PontoRouter.get("/",PontoController.consulta);
PontoRouter.get("/:id",PontoController.consultaByFuncId);
PontoRouter.delete("/:id",PontoController.deletePonto);

export default PontoRouter;