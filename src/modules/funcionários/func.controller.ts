import { response, type Request, type Response } from "express";
import Funcionario from "./func.modules.js"
import FuncService from "./func.service.js"


class FuncController {
    public async findUsers(req:Request, res: Response){
        const users = await FuncService.findUser();
        
        res.status(200).json(users);
    }

    public async createUsers (req:Request, res:Response){
        const users = req.body;

        const newUsers = await Funcionario.create(users);

        return res.status(201).json(newUsers);

        
    }
}

export default new FuncController();