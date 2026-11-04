import { after } from "node:test";
import Adiministrador from "./admin.modules.js";
import type { Iadmin, ICreateAdminDTO, IUpdateAdminDTO} from "./admin.types.js"

class AdminService {
    public async findAdmin(){
        return await Adiministrador.find();
    }

    public async findAdminById(id:string){
        return await Adiministrador.findById(id);
    }

    public async createAdmin(data: ICreateAdminDTO){
        const newAdmin = Adiministrador.create({
            nome: data.nome,
            email: data.email,
            cnpjEmpresa: data.cnpjEmpresa
        });

        return await newAdmin;
    }

    public async updataAdmin(id:string, data:IUpdateAdminDTO){
        return await Adiministrador.findByIdAndUpdate(id,data,{
            returnDocument: 'after',
            runValidators: true
        });
    }

    public async deleteAdmin(id:string){
        return await Adiministrador.findByIdAndDelete(id);
    }
}

export default new AdminService;