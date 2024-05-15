import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../livros-next/controle/ControleLivros.ts'; 

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            const { codigo } = req.query;
            controleLivro.excluir(Number(codigo));
            res.status(200).json({ message: 'Livro excluído com sucesso.' });
        } else {
            res.status(405).end();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
