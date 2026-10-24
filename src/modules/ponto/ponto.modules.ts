import monggose from "mongoose"
import type {Iponto} from "./ponto.types.js"

const PontoSchema = new monggose.Schema<Iponto>({
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    dataHora: {
        type: Date,
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