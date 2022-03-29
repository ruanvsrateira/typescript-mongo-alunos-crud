import UserModel from "../models/UserModel";
import { Request } from 'express';

export default async function(id:String) {
    const alunoDeletado = await UserModel.findOneAndRemove({ where: { id } })

    return alunoDeletado;
}