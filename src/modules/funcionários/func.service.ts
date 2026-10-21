import Funcionario from "./func.modules.js"

class FuncService {
    public async findUser(){
        return await Funcionario.find();
    }


}

export default new FuncService;