import type { Iponto,IcreatePontoDTO,IupdatePontoDTO } from "./ponto.types.js";
import Ponto from "./ponto.modules.js"

class PontoService{
    public async novoRegistro(data:IcreatePontoDTO){
        if(
            data.origem.tipoRegistro === "remoto" &&
            !data.origem.local?.trim()
        ){
            throw new Error("O local é obrigatório para registros remotos")
        }
        
        const registro = await Ponto.create({
            funcionarioId: data.funcionarioId,
            tipo: data.tipo,
            dataHora: new Date(),
            observacao: data.observacao ?? "",
            origem: {
                tipoRegistro: data.origem.tipoRegistro,
                ...(data.origem.tipoRegistro === "remoto" && {
                    local: data.origem.local?.trim()
                })
        }});

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