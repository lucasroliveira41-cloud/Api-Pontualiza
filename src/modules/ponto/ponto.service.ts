import type { Iponto,IcreatePontoDTO,IupdatePontoDTO } from "./ponto.types.js";
import Ponto from "./ponto.modules.js"
import { describe } from "node:test";

class PontoService{
    public async novoRegistro(data:IcreatePontoDTO){
        const registro = await Ponto.create({
            tipo: data.tipo,
            dataHora: data.dataHora,
            origem: data.origem,
            observacao: data.observacao
        });

        return registro;
    }
}

export default new PontoService();