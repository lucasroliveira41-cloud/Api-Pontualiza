import { response, type Request, type Response } from "express";


class UsuarioController {
    public users: any[] = [];

    public async findUsers(req:Request, res: Response){
        res.json(this.users);
    }

    public async createUsers (req:Request, res:Response){
        this.users.push(req.body);

        return res.status(201).json({
            mensage: "post ok",     
        });

        
    }
}

export default new UsuarioController();