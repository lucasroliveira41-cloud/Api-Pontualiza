import type { Response, Request } from "express";
import PontoService from "./ponto.service.js";

class PontoController{
    public async createPonto(req:Request, res:Response){
        const {funcionarioId, tipo, dataHora, origem, observacao} = req.body ?? {};
        
        const novoRegistro = await PontoService.novoRegistro({funcionarioId, tipo, dataHora, origem, observacao});

        return res.status(201).json(novoRegistro);
    }

    public async updatePonto(req:Request, res:Response){
        const id = req.params.id ?? {};

        const {funcionarioId, tipo, dataHora, origem, observacao} = req.body ?? {};

        if(!id || typeof id !== "string"){
            return res.status(400).json({
                menssage: "id invalido!"
            });
        }

        const registroAtualizado = await PontoService.updatePonto(id,{funcionarioId, tipo, dataHora, origem, observacao});

        return res.status(200).json(`Registro atualizado com sucesso:  ${registroAtualizado}`);
    }

    public async consulta(req:Request, res:Response){
        const pontos = await PontoService.consultaPonto();

        return res.status(200).json(pontos);
    }

}

export default new PontoController();