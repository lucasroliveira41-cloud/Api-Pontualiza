import { response, type Request, type Response } from "express";
import Usuario from "./usuário.modules.js"
import UsuarioService from "./usuários.service.js"


class UsuarioController {
    public async findUsers(req:Request, res: Response){
        const users = await UsuarioService.findUser();
        
        res.status(200).json(users);
    }

    public async createUsers (req:Request, res:Response){
        const { nome, tipo, status, id_empresa } = req.body;
        
        const newUser = await UsuarioService.crateUser({nome, tipo, status, id_empresa});

        return res.status(201).json(newUser);
    }
}

export default new UsuarioController();