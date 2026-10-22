import Funcionario from "./func.modules.js"
import type { Ifunc, IcreateFuncDTO } from "./func.types.js";

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

    


}

export default new FuncService;