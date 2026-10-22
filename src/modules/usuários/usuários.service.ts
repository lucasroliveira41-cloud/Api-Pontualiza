import Usuario from "./usuário.modules.js"
import type { IcreateUsuarioDTO, Iusuario } from "./usuário.types.js";

class UsuarioService {
    public async findUser(){
        return await Usuario.find();
    }

    public async crateUser(data:IcreateUsuarioDTO){
        const novoUsuario = Usuario.create({
            nome: data.nome,
            tipo: data.tipo,
            status: data.status,
            id_empresa: data.id_empresa
        });

        return await novoUsuario;
    }


}

export default new UsuarioService;