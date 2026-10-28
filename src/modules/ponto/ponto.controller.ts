import type { Response, Request } from "express";
import PontoService from "./ponto.service.js";

class PontoController{
    public async createPonto(req:Request, res:Response){
        const {funcionarioId, tipo, dataHora, origem, observacao} = req.body ?? {};
        
        const novoRegistro = await PontoService.novoRegistro({
            funcionarioId, tipo, dataHora, origem, observacao});

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

        const registroAtualizado = await PontoService.updatePonto(id,{
            funcionarioId, tipo, dataHora, origem, observacao});

        return res.status(200).json(`Registro atualizado com sucesso:  ${registroAtualizado}`);
    }

    public async consulta(req:Request, res:Response){
        const pontos = await PontoService.consultaPonto();

        return res.status(200).json(pontos);
    }

    public async deletePonto (req:Request, res:Response){
        const id = req.params.id ?? {};

        if(!id || typeof id !== "string"){
            return res.status(400).json({
                menssage: "id invalido!"
            });
        }

        await PontoService.deletePonto(id);

        return res.status(200).json({
            menssage: "Registro apagado com sucesso!"
        });
    }

    public async consultaByFuncId(req:Request, res:Response){
        const id = req.params.id ?? {};

        if(!id || typeof id !== "string"){
            return res.status(400).json({
                menssage: "id invalido!"
            });
        }

        const ponto = await PontoService.consultaPontoByFuncId(id);

        return res.status(200).json(ponto);
    }

}

export default new PontoController();