import type mongoose from "mongoose"

export interface Iponto{
    funcionarioId: mongoose.Schema.Types.ObjectId,
    tipo: string,
    dataHora: Date,
    origem: string,
    observacao?: string
}

export interface IcreatePontoDTO{
    funcionarioId: string,
    tipo: string,
    dataHora: Date,
    origem: string,
    observacao?: string
}

export interface IupdatePontoDTO{
    funcionarioId: string,
    tipo: string,
    dataHora?: Date,
    origem?: string,
    observacao?: string
}