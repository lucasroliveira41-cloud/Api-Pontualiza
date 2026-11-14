
export interface IorigemDoRegistro{
    tipoRegistro: "presencial" | "remoto",
    local: string
}

export interface Iponto{
    funcionarioId: string,
    tipo: string,
    dataHora: Date,
    origem: IorigemDoRegistro,
    observacao?: string

}

export interface IcreatePontoDTO{
    funcionarioId: string,
    tipo: string,
    dataHora?: Date,
    origem: IorigemDoRegistro,
    observacao?: string
}

export interface IupdatePontoDTO{
    funcionarioId: string,
    tipo?: string,
    dataHora?: Date,
    origem?: IorigemDoRegistro,
    observacao?: string
}