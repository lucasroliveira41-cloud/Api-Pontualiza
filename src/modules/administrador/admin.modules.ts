import mongoose from "mongoose";
import type {Iadmin} from "./admin.types.js"

const adminSchema = new mongoose.Schema<Iadmin>({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    cnpjEmpresa: {
        type: Number,
        required: true,
        trim: true
    }

},

{
    timestamps: true,
}

);

export default mongoose.model<Iadmin>("Adiministrador",adminSchema);