import UserModel from '../models/UserModel';
import { Request } from 'express';

export default async function(nome:Request, email:Request, senha:Request) {
    const alunoCriado = await UserModel.create({ nome, email, senha });

    return alunoCriado;
}