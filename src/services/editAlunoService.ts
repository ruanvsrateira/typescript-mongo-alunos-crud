import UserModel from '../models/UserModel';

export default function(id: String, nome:Request, email:Request, senha:Request) {
    const alunoEditado = UserModel.findByIdAndUpdate(id, { nome, email, senha });

    return alunoEditado;
}