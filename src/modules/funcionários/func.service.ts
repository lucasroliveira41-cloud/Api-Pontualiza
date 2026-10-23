import { deflate } from "node:zlib";
import Funcionario from "./func.modules.js"
import type { Ifunc, IcreateFuncDTO, IupdateFuncDTO } from "./func.types.js";

class FuncService {
    public async findFunc(){
        return await Funcionario.find();
    }

    public async crateFunc(data:IcreateFuncDTO){
        const novoFunc = Funcionario.create({
            nome: data.nome,
            email: data.email,
            matricula: data.matricula,
            cargo: data.cargo,
            ativo: data.ativo
        });
    
        return await novoFunc;
    }

    public async findFuncById (id:string){
        return await Funcionario.findById(id);
    }

    public async updateFuncService (id:string, data:IupdateFuncDTO){
        return await Funcionario.findByIdAndUpdate(id,data,{
            returnDocument: 'after',
            runValidators: true
        });
    }

    public async deleteFunc(id:string){
        return Funcionario.findByIdAndDelete(id);
    }
}

export default new FuncService;