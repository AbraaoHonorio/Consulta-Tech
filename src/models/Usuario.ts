import { DateTime } from 'ionic-angular';
export class Usuario {

    constructor(
    public nome?: string,
    public email?: string,
    public cpf?: string,
    public dataNascimento?: DateTime,
    public celular?: string,
    public telefone?: string,
    ){}
}

