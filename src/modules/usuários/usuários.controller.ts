import { response, type Request, type Response } from "express";
import Usuario from "./usuário.modules.js"


class UsuarioController {
    public async findUsers(req:Request, res: Response){
        const users = await Usuario.find();
        
        res.status(200).json(users);
    }

    public async createUsers (req:Request, res:Response){
        const users = req.body;

        const newUsers = await Usuario.create(users);

        return res.status(201).json(newUsers);

        
    }
}

export default new UsuarioController();