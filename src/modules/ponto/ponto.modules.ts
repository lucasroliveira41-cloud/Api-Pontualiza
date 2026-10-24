import type {Iponto} from "./ponto.types.js";
import mongoose from "mongoose";

const PontoSchema = new mongoose.Schema<Iponto>({
    funcionarioId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Funcionario",
        required: true
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    dataHora: {
        type: Date,
        default: Date.now
    },
    origem: {
        type: String,
        trim: true
    },
    observacao:{
        type: String,
        trim: true
    }
});

export default mongoose.model<Iponto>("Ponto",PontoSchema);