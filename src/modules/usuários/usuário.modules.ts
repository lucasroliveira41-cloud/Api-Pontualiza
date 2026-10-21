import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    CPF: {
        type: Number,
        required: true
    },
    cargo: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
    },
    id_empresa: {
        type: Number,
        required: true
    }
}) 



export default mongoose.model("Usuario",userSchema);