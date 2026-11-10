import  type {Request, Response} from "express";
import AdminService from "./admin.service.js";

class AdminController {

    public async criarAdmin(req:Request, res: Response){
        const {nome, email, cnpjEmpresa} = req.body ?? {};

        const newAdmin = await AdminService.createAdmin({nome, email, cnpjEmpresa});

        return res.status(201).json(newAdmin);
    }

    public async findAdmin (req:Request, res: Response){
        const Admin = await AdminService.findAdmin();

        return res.status(200).json(Admin);
    }
    public async findAdminById (req:Request, res: Response){
        const id = req.body.id ?? {};

        if(!id || typeof id !== "string"){
            return res.status(400).json({
                menssagen: "id"
            });
        };

        const admin = await AdminService.findAdminById(id);

        return res.status(200).json(admin);
    }

    public async updateAdmin (req:Request, res: Response){
        const {nome, email, cnpjEmpresa} = req.body ?? {};

        const id = req.body.id ?? {};

        if(!id || typeof id !== "string"){
            return res.status(400).json({
                menssagen: "id"
            });
        };

        const newAdmin = await AdminService.updataAdmin(id, {nome, email, cnpjEmpresa});

        return res.status(200).json({
            menssagen: `Admin: ${newAdmin}. atualizado com sucesso!`
        });
    }
    public async deleteAdmin (req:Request, res: Response){
        const id = req.body.id ?? {};

        if(!id || typeof id !== "string"){
            return res.status(400).json({
                menssagen: "id"
            });
        };

        AdminService.deleteAdmin(id);

        return res.status(200).json({
            menssagen: "Admin deletado com sucesso!"
        });
    }
}

export default new AdminController();