import { response, type Request, type Response } from "express";
import Funcionario from "./func.modules.js"
import FuncService from "./func.service.js"


class FuncController {
    public async findUsers(req:Request, res: Response){
        const users = await FuncService.findFunc();
        
        res.status(200).json(users);
    }

    public async createUsers (req:Request, res:Response){
        const {nome, email, matricula, cargo, ativo} = req.body;

        const newFunc = await FuncService.crateFunc({nome, email, matricula, cargo, ativo});

        return res.status(201).json(newFunc);

        
    }
}

export default new FuncController();