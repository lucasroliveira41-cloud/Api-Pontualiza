import { response, type Request, type Response } from "express";
import Funcionario from "./func.modules.js"
import FuncService from "./func.service.js"


class FuncController {
    public async createUsers (req:Request, res:Response){
        const {nome, email, matricula, cargo, ativo} = req.body;

        const newFunc = await FuncService.crateFunc({nome, email, matricula, cargo, ativo});

        return res.status(201).json(newFunc);   
    }
    
    public async findUsers(req:Request, res: Response){
        const users = await FuncService.findFunc();
        
        res.status(200).json(users);
    }

    public async findUsersById (req:Request, res: Response){
        const id = req.params.id ?? {};


        if(!id || typeof id !== "string"){
            return res.status(400).json({
                menssage: "id invalido"
            });
        };

        const funcionario = await FuncService.findFuncById(id);


        return res.status(200).json(funcionario);
    }

    public async updateUser(req:Request, res: Response){
        const id = req.params.id ?? {};
        const {nome, email, matricula, cargo, ativo} = req.body ?? {};

        if(!id || typeof id !== "string"){
            return res.status(400).json({
                menssage: "id invalido"
            });
        };

        const newFunc = await FuncService.updateFuncService(id,{
            nome, email, matricula, cargo, ativo
        });

        return res.status(200).json(`Dados alterados com sucesso!: ${newFunc}`);
    }

    public async deleteUser(req:Request, res: Response){
        const id = req.params.id ?? {};

        if(!id || typeof id !== "string"){
            return res.status(400).json({
                menssage: "id invalido"
            });
        };

        await FuncService.deleteFunc(id);

        return res.status(200).json({
            menssage: "Funcionario deletado com sucesso!"
        });
    }
}

export default new FuncController();