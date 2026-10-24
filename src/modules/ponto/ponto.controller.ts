import Ponto from "./ponto.modules.js";
import type { Response, request } from "express";
import pontoService from "./ponto.service.js";

class PontoController{
    public async createPonto(req:Request, res:Response){
        const registro = req.body ?? {};

        
    }

}

export default new PontoController();