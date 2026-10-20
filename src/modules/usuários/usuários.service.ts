import Usuario from "./usuário.modules.js"

class UsuarioService {
    public async findUser(){
        return await Usuario.find();
    }


}

export default new UsuarioService;