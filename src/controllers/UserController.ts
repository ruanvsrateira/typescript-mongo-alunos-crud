import { Request, Response } from 'express';

import getAllAlunosService from '../services/getAllAlunosService';
import addAlunoService from '../services/addAlunoService';
import removeAlunoService from '../services/removeAlunoService';
import editAlunoService from '../services/editAlunoService';

class UserController {
    public async index(req: Request, res: Response) {
        const alunos = await getAllAlunosService();

        return res.json(alunos);
    }

    public async store(req: Request, res: Response) {
        const { nome, email, senha } = req.body;

        const alunoCriado = await addAlunoService(nome, email, senha);
        res.json(alunoCriado);
    }

    public async delete(req: Request, res:Response) {
        const { id } = req.params;

        const alunoDeletado = await removeAlunoService(id);

        res.json(alunoDeletado );
    }

    public async edit(req:Request, res:Response) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        
        const alunoEditado = await editAlunoService(id, nome, email, senha);

        return res.json(alunoEditado);
    }
}

export default new UserController();