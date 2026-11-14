import type {Iponto} from "./ponto.types.js";
import type { IorigemDoRegistro } from "./ponto.types.js";
import mongoose from "mongoose";

const OrigemSchema = new mongoose.Schema<IorigemDoRegistro>({
    tipoRegistro: {
        type: String,
        enum: ["presencial","remoto"],
        required: true
    },
    local: {
        type: String,
        trim: true,
        required: function(this: {tipoRegistro:string}){
            return this.tipoRegistro === "remoto";
        }
    }
},
    {
        _id:false
    }
);

const PontoSchema = new mongoose.Schema<Iponto>({
    funcionarioId:{
        type: String,
        required: true,
        ref: "Funcionario"
    },
    tipo:{
        type: String,
        required: true,
        trim:true
    },
    dataHora: {
        type: Date,
        default: Date.now
    },
    origem: {
        type: OrigemSchema,
        trim: true
    },
    observacao:{
        type: String,
        trim: true
    }
});

export default mongoose.model<Iponto>("Ponto",PontoSchema);