import monggose from "mongoose"
import type {Iponto} from "./ponto.types.js"
import mongoose from "mongoose";
import Funcionario from "./funcionários/func.modules.js";

const PontoSchema = new monggose.Schema<Iponto>({
    funcionarioId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Funcionario"
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    dataHora: {
        type: Date,
        default: Date.now,
        required: true
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

export default monggose.model<Iponto>("Ponto",PontoSchema);