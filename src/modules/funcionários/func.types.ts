import type { Iponto } from "../ponto/ponto.types.js"

export interface IcreateFuncDTO{
    nome: string,
    email: string,
    matricula: number,
    cargo: string
    ativo: boolean
}

export interface Ifunc{
    nome: string,
    email: string,
    matricula: number,
    cargo: string
    ativo: boolean
}

export interface IupdateFuncDTO{
    nome?: string,
    email?: string,
    matricula: number,
    cargo?: string
    ativo?: boolean
}