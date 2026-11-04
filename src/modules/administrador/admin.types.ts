export interface Iadmin {
    nome: String,
    email: string,
    cnpjEmpresa: number
}

export interface ICreateAdminDTO {
    nome: String,
    email: string,
    cnpjEmpresa: number
}

export interface IUpdateAdminDTO {
    nome?: String,
    email?: string,
    cnpjEmpresa?: number
}