import type { Iponto,IcreatePontoDTO,IupdatePontoDTO } from "./ponto.types.js";
import Ponto from "./ponto.modules.js"
import { describe } from "node:test";

class PontoService{
    public async novoRegistro(data:IcreatePontoDTO){
        const registro = await Ponto.create({
            funcionarioId: data.funcionarioId,
            tipo: data.tipo,
            dataHora: new Date(),
            origem: data.origem,
            observacao: data.observacao ?? ""
        });

        return registro;
    }

    public async consultaPonto(){
        return await Ponto.find();
    }

    public async updatePonto(id:string, data:IupdatePontoDTO){
        return await Ponto.findByIdAndUpdate(id,data,{
            returnDocument: 'after',
            runValidators: true
        });
    }

    public async deletePonto(id:string){
        return await Ponto.findByIdAndDelete(id);
    }

    public async consultaPontoByFuncId(id:string){        
        return await Ponto.find({funcionarioId: id});
    }
}

export default new PontoService();