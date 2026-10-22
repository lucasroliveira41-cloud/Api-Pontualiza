import mongoose from "mongoose";
import type { Ifunc } from "./func.types.js";

const funcSchema = new mongoose.Schema<Ifunc>({
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
    cargo: {
        type: String,
        required: true,
        trim: true
    },
    ativo: {
        type: Boolean,
        required: true
    },
    matricula: {
        type: Number,
        unique: true,
        required: true
    },

},

    {
        timestamps: true,
    }

); 

export default mongoose.model<Ifunc>("Funcionario",funcSchema);