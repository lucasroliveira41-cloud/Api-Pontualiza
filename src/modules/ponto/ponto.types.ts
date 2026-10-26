import type mongoose from "mongoose"

export interface Iponto{
    funcionarioId: string,
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
    tipo?: string,
    dataHora?: Date,
    origem?: string,
    observacao?: string
}