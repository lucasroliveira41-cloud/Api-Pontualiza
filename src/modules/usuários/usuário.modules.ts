import mongoose, {Schema} from "mongoose";
import type { Iusuario } from "./usuário.types.js";



const userSchema = new Schema<Iusuario>({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    id_empresa: {
        type: Number,
        required: true
    }
}) 



export default mongoose.model<Iusuario>("Usuario",userSchema);